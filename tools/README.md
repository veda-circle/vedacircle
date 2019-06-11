# Tools

Workspace tools


### Build

```bash
yarn workspace @vedacircle/tools build
```

## Command

### Usage

```bash
ng add @vedacircle/tools
# or add following to devDependencies in /package.json 
# "@vedacircle/tools": "file:./dist/tools"
```

> add command `architect`

```json
      ...
      "architect": {
        "touch": {
          "builder": "./dist/tools:command",
           /* "builder": "@vedacircle/tools:command", */
          "options": {
            "command": "touch",
            "args": [
              "test.ts"
            ]
          }
        }
      ...
```

### Run
```bash
ng run api:touch
```

## Store

#### Usage

```bash
ng add @vedacircle/tools
ng generate @vedacircle/tools:store --project=auth   -d
```
