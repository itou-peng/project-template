# project-template

The monorepo project template by nx.

1. [Package Mono Repo Tutorial](https://nx.dev/getting-started/tutorials/package-based-repo-tutorial)
2. [Getting Started with Integrated Repos](https://nx.dev/getting-started/tutorials/integrated-repo-tutorial)

## NX Operation

### Generate
`nx generate <plugin name>:<generator name> <default option> <other options>`

example:

Run this generator to make a new library named is-even:

```shell
npx nx generate @nx/js:library {lib-name} \
  --directory=packages/{lib-name} \
  --publishable \
  --importPath=@{project-name}/is-even
```

### Build

To run the build target for all the packages in the workspace, use:

`npx nx run-many -t build`

You can also only run tasks on packages that got changed by using

`npx nx affected -t build`

