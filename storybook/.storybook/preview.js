import { withLinks } from '@storybook/addon-links';

export const decorators = [withLinks];

const port = 60772;

// const productionURL = new URL(window.location.toString());
// productionURL.pathname = "/public";
// const productionUrl = productionURL.toString();
// console.log("productionUrl", productionUrl);

export const parameters = {
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  docs: {
    iframeHeight: '200px',
  },
  server: {
    url: process.env.NODE_ENV === 'production' ? "/#/storybook" : `http://localhost:${port}/#/storybook`,
    fetchStoryHtml: async (url, path, params, storyContext) => {
      let fetchUrl;
      try {
        fetchUrl = new URL(`${url}/${path}`);
      } catch (err) {
        fetchUrl = new URL(window.location.toString());
        fetchUrl.pathname = `${url}/${path}`;
      }
      fetchUrl.search = new URLSearchParams({ ...storyContext.globals, ...params }).toString();
      const completeUrl = decodeURIComponent(fetchUrl.toString());
      console.log("story url", { url, path, completeUrl });

      const script = `
  if (!document.getElementById("root2")) {
    const element = document.createElement("iframe");
    element.id = "root2";
    element.style = "margin: 0px; border: 0px; width: 100%; height: 100vh;";
    element.src = "${completeUrl}";
    console.log("loading 1 ${completeUrl}");
    document.getElementById("root").appendChild(element);

    const element2 = document.createElement("style");
    element2.textContent = ".sb-show-main.sb-main-padded { padding: 0px; }";
    document.getElementById("root").appendChild(element2);
  } else {
    document.getElementById("root2").src = "${completeUrl}";
    console.log("loading 2 ${completeUrl}");
  }`;
      const scriptElement = document.createElement("script");
      scriptElement.textContent = script;
      return scriptElement;
    },
  },
};
