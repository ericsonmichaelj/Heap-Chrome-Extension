/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + doc;
}

const githubUrl = 'https://github.com/ericsonmichaelj/Heap-Chrome-Extension'
const supportUrl = 'https://chrome.google.com/webstore/detail/heap-analytics-debugger/bihllkinhojjiacepgoipnppiiigbekj/support'

class Help extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more using the [documentation on this site.](${docUrl(
          'gettingStarted.html',
          language
        )})`,
        title: 'Browse Docs',
      },
      {
        content: `View source code and report an issue for bugs or feature enhancements  [here.](${supportUrl})`,
        title: 'Check out Github',
      },
      {
        content: `Don't have a github account? Ask [support](${supportUrl}) for additional questions`,
        title: 'Go to Support',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Need help?</h2>
            </header>
            <p>If you have any questions you can reach me at <a href="mailto:ericson.michael.j@gmail.com">ericson.michael.j@gmail.com</a></p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
