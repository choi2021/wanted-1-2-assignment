import HTTPError from '../network/httpError';

const getIssueList = async page => {
  const response = await fetch(
    `https://api.github.com/repos/angular/angular-aaacli/issues?sort=comments&per_page=30&page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization:
          'token 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',
      },
    }
  );
  if (!response.ok) {
    throw new HTTPError(response.status, response.statusText);
  } else {
    const data = await response.json();
    return data;
  }
};

export default getIssueList;
