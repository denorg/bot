const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");
const WEBHOOK_KEY = Deno.env.get("WEBHOOK_KEY");

/** Send tweets */
const sendTweets = async () => {
  const repos: {
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
  }[] = await (
    await fetch("https://api.github.com/orgs/denorg/repos", {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    })
  ).json();
  let i = 0;
  for await (const repo of repos) {
    i++;
    if (i < 5 && !repo.private) {
      const releases: {
        name: string;
        published_at: string;
      }[] = await (
        await fetch(`https://api.github.com/repos/${repo.full_name}/releases`)
      ).json();
      for await (const release of releases) {
        if (
          new Date().getTime() - new Date(release.published_at).getTime() <
          86400000 // Change to 3600000
        )
          tweet(
            `🎉 We just released ${release.name} of ${repo.full_name}! ${repo.html_url}: ${repo.description} #denorg #deno #typescript #denoland`
          );
      }
    }
  }
};

/** Post a tweet using IFTTT */
const tweet = async (message: string) => {
  await fetch(
    `https://maker.ifttt.com/trigger/twitter/with/key/${WEBHOOK_KEY}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value1: message }),
    }
  );
};

sendTweets();
