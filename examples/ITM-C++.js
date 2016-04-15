/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: [ "#F00", "#0F0", "#00F" ], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: false,
      displayBranch: true,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false, // default = true
    tooltipHTMLFormatter: function ( commit ) {
      return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: "metro",
  author: "Joshua Carroll <jcarroll@eeft.com>"
};
var gitGraph = new GitGraph( config );

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Create branch named "master"
var master = gitGraph.branch( "master" );

// Commit on HEAD Branch which is "master"
gitGraph.commit( "Created README.md" );

// Add few commits on master.
gitGraph.commit("README.md edited online with Bitbucket").commit("README.md edited online with Bitbucket").commit("README.md edited online with Bitbucket").commit("README.md edited online with Bitbucket");

// Create a new "dev" branch from "master"
var br40 = gitGraph.branch( "4.0" );
br40.commit( "Initial commit of 4.0" );

// Commit again on "master"
br40.commit("Edited plan (README.md) for minor versions");

br40.merge(master, {message: "New release", tag: "4.0.0"});
var br41 = gitGraph.branch("4.1");
br41.commit("Start 4.1 branch");

br40.commit({
	message: "Commit of 4.0.1",
	tag: "4.0.1"
});

br40.commit({
	message: "Commit of 4.0.2",
	tag: "4.0.2"
});

br41.merge(master, {message: "New release", tag: "4.1.0"});
var br42 = gitGraph.branch("4.2");
br42.commit("Start 4.2 branch");

br40.commit({
	message: "Commit of 4.0.6",
	tag: "4.0.6"
});

br41.commit({
	message: "Commit of 4.1.1",
	tag: "4.1.1"
});

br41.commit({
	message: "Commit of 4.1.2",
	tag: "4.1.2"
});

br40.commit({
	message: "Commit of 4.0.7",
	tag: "4.0.7"
});

br42.merge(master, {message: "New release", tag: "4.2.0"});
var br43 = gitGraph.branch("4.3");
br43.commit("Start 4.3 branch");