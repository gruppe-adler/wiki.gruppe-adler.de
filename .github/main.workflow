workflow "Build and Deploy to GittHub Pages" {
  resolves = ["JamesIves/github-pages-deploy-action@master"]
  on = "push"
}

action "JamesIves/github-pages-deploy-action@master" {
  uses = "JamesIves/github-pages-deploy-action@master"
  env = {
    BRANCH = "gh-pages"
    BUILD_SCRIPT = "npm run build"
    FOLDER = "dist"
  }
  secrets = ["GITHUB_TOKEN"]
}
