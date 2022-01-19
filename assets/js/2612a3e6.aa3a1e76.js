(self.webpackChunk=self.webpackChunk||[]).push([[44229],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80938:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>d,default:()=>m});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"quick-start-guide",title:"Quick Start Guide",original_id:"quick-start-guide"},l=void 0,p={unversionedId:"quick-start-guide",id:"version-v10.0.0/quick-start-guide",isDocsHomePage:!1,title:"Quick Start Guide",description:"In this guide we are going to give a brief overview of how Relay works and how to use it, using as reference an example todo list app. For more thorough documentation, check out our Guides and API sections.",source:"@site/versioned_docs/version-v10.0.0/Introduction-QuickStartGuide.md",sourceDirName:".",slug:"/quick-start-guide",permalink:"/docs/v10.0.0/quick-start-guide",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.0/Introduction-QuickStartGuide.md",version:"v10.0.0",lastUpdatedBy:"Vadim Evseev",lastUpdatedAt:1642628716,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"quick-start-guide",title:"Quick Start Guide",original_id:"quick-start-guide"},sidebar:"version-v10.0.0/docs",previous:{title:"Installation and Setup",permalink:"/docs/v10.0.0/installation-and-setup"},next:{title:"GraphQL in Relay",permalink:"/docs/v10.0.0/graphql-in-relay"}},d=[{value:"Setup",id:"setup",children:[]},{value:"Relay Environment",id:"relay-environment",children:[]},{value:"Rendering GraphQL Queries",id:"rendering-graphql-queries",children:[]},{value:"Using Query Variables",id:"using-query-variables",children:[]},{value:"Using Fragments",id:"using-fragments",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]},{value:"Rendering Fragments",id:"rendering-fragments",children:[]},{value:"Mutating Data",id:"mutating-data",children:[{value:"Optimistic Updates",id:"optimistic-updates",children:[]},{value:"Updating local data from mutation responses",id:"updating-local-data-from-mutation-responses",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide we are going to give a brief overview of how Relay works and how to use it, using as reference an example todo list app. For more thorough documentation, check out our Guides and API sections."),(0,o.kt)("p",null,"Table of Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setup"},"Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#relay-environment"},"Relay Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rendering-graphql-queries"},"Rendering GraphQL Queries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-query-variables"},"Using Query Variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-fragments"},"Using Fragments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#composing-fragments"},"Composing Fragments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rendering-fragments"},"Rendering Fragments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mutating-data"},"Mutating Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#next-steps"},"Next Steps"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Before starting, make sure to check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/prerequisites"},"Prerequisites")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/installation-and-setup"},"Installation and Setup")," guides. As mentioned in the prerequisites, we need to make sure that we've set up a GraphQL server and schema."),(0,o.kt)("p",null,"Fortunately, we are going to be using this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/tree/main/todo"},"example todo list app"),", which already has a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/server.js"},"server")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql"},"schema")," available for us to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# From schema.graphql\n# https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql\n\ntype Query {\n  viewer: User\n\n  # Fetches an object given its ID\n  node(\n    # The ID of an object\n    id: ID!\n  ): Node\n}\n")),(0,o.kt)("p",null,"Additionally, we will be using ",(0,o.kt)("a",{parentName:"p",href:"https://flow.org/"},"Flow")," inside our JavaScript code examples. Flow is optional to set up in your project, but we will include it in our examples for completeness."),(0,o.kt)("h2",{id:"relay-environment"},"Relay Environment"),(0,o.kt)("p",null,"Before we can start rendering pixels on the screen, we need to configure Relay via a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/relay-environment"},"Relay Environment"),". The environment bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate."),(0,o.kt)("p",null,"For the purposes of our example, we are simply going to configure our environment to communicate with our existing GraphQL server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\n\nfunction fetchQuery(\n  operation,\n  variables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: operation.text,\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\nconst environment = new Environment({\n  network: Network.create(fetchQuery),\n  store: new Store(new RecordSource()),\n});\n\nexport default environment;\n")),(0,o.kt)("p",null,"A Relay Environment requires at least a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/relay-store"},"Store")," and a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/network-layer"},"Network Layer"),". The above code uses the default implementation for ",(0,o.kt)("inlineCode",{parentName:"p"},"Store"),", and creates a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/network-layer"},"Network Layer")," using a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchQuery")," function to fetch a GraphQL query from our server."),(0,o.kt)("p",null,"Usually we'd want a single environment in our app, so you could export this environment as a singleton instance from a module to make it accessible across your app."),(0,o.kt)("h2",{id:"rendering-graphql-queries"},"Rendering GraphQL Queries"),(0,o.kt)("p",null,"Now that we've configured our Relay Environment, we can start fetching queries and rendering data on the screen. The entry point to render data from a GraphQL query is the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/query-renderer"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryRenderer"))," component provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"react-relay"),"."),(0,o.kt)("p",null,"To start, let's assume we just want to render the user id on the screen. From our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql#L66"},"schema"),", we know that we can get the current ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," field, so let's write a sample query to fetch the current user id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery {\n  viewer {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Now, let's see what it would take to create a component that fetches and renders the above query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// App.js\nimport React from 'react';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nconst environment = // defined or imported above...\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <QueryRenderer\n        environment={environment}\n        query={graphql`\n          query UserQuery {\n            viewer {\n              id\n            }\n          }\n        `}\n        variables={{}}\n        render={({error, props}) => {\n          if (error) {\n            return <div>Error!</div>;\n          }\n          if (!props) {\n            return <div>Loading...</div>;\n          }\n          return <div>User ID: {props.viewer.id}</div>;\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Our app is rendering a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," in the above code, like any other React Component, but let's see what's going on in the props that we are passing to it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're passing the ",(0,o.kt)("inlineCode",{parentName:"li"},"environment")," we defined earlier."),(0,o.kt)("li",{parentName:"ul"},"We're using the ",(0,o.kt)("a",{parentName:"li",href:"/docs/v10.0.0/graphql-in-relay"},(0,o.kt)("inlineCode",{parentName:"a"},"graphql"))," function to define our GraphQL query. ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," is a template tag that is never executed at runtime, but rather used by the ",(0,o.kt)("a",{parentName:"li",href:"/docs/v10.0.0/graphql-in-relay#relay-compiler"},"Relay Compiler")," to generate the runtime artifacts that Relay requires to operate. We don't need to worry about this right now; for more details check out our ",(0,o.kt)("a",{parentName:"li",href:"/docs/v10.0.0/graphql-in-relay"},"GraphQL in Relay")," docs."),(0,o.kt)("li",{parentName:"ul"},"We're passing an empty set of ",(0,o.kt)("inlineCode",{parentName:"li"},"variables"),". We'll look into how to use variables in the next section."),(0,o.kt)("li",{parentName:"ul"},"We're passing a ",(0,o.kt)("inlineCode",{parentName:"li"},"render")," function; as you can tell from the code, Relay gives us some information about whether an error occurred, or if we're still fetching the query. If everything succeeds, the data we requested will be available inside ",(0,o.kt)("inlineCode",{parentName:"li"},"props"),", with the same shape as the one specified in the query.")),(0,o.kt)("p",null,"In order to run this app, we need to first compile our query using the Relay Compiler. Assuming the setup from ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/installation-and-setup"},"Installation and Setup"),", we can just run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn relay"),"."),(0,o.kt)("p",null,"For more details on ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),", check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/query-renderer"},"docs"),"."),(0,o.kt)("h2",{id:"using-query-variables"},"Using Query Variables"),(0,o.kt)("p",null,"Let's assume for a moment that in our app we want to be able to view data for different users, so we're going to somehow need to query users by id. From our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql#L69"},"schema"),", we know we can query nodes given an id, so let's write a parameterized query to get a user by id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery($userID: ID!) {\n  node(id: $userID) {\n    id\n  }\n}\n")),(0,o.kt)("p",null,"Now, let's see how we would fetch the above query using a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// UserTodoList.js\n// @flow\nimport React from 'react';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nconst environment = // defined or imported above...\n\ntype Props = {\n  userID: string,\n};\n\nexport default class UserTodoList extends React.Component<Props> {\n  render() {\n    const {userID} = this.props;\n\n    return (\n      <QueryRenderer\n        environment={environment}\n        query={graphql`\n          query UserQuery($userID: ID!) {\n            node(id: $userID) {\n              id\n            }\n          }\n        `}\n        variables={{userID}}\n        render={({error, props}) => {\n          if (error) {\n            return <div>Error!</div>;\n          }\n          if (!props) {\n            return <div>Loading...</div>;\n          }\n          return <div>User ID: {props.node.id}</div>;\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("p",null,"The above code is doing something very similar to our ",(0,o.kt)("a",{parentName:"p",href:"#rendering-graphql-queries"},"previous example"),". However, we are now passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"$userID")," variable to the GraphQL query via the ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," prop. This has a couple of important implications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given that ",(0,o.kt)("inlineCode",{parentName:"li"},"userID")," is also a prop that our component takes, it could receive a new ",(0,o.kt)("inlineCode",{parentName:"li"},"userID")," from its parent component at any moment. When this happens, new ",(0,o.kt)("inlineCode",{parentName:"li"},"variables")," will be passed down to our ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryRenderer"),", which will automatically cause it to re-fetch the query with the new value for ",(0,o.kt)("inlineCode",{parentName:"li"},"$userID"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"$userID")," variable will now be available anywhere inside that query. This will become important to keep in mind when using fragments.")),(0,o.kt)("p",null,"Now that we've updated the query, don't forget to run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn relay"),"."),(0,o.kt)("h2",{id:"using-fragments"},"Using Fragments"),(0,o.kt)("p",null,"Now that we know how to define and fetch queries, let's actually start building a todo list."),(0,o.kt)("p",null,"First, let's start at the bottom. Suppose that we want to render a component that simply displays a given todo item's text and completed state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Todo.js\nimport React from 'react';\n\ntype Props = {\n  todo: {\n    complete: boolean,\n    text: string,\n  },\n};\n\nexport default class Todo extends React.Component<Props> {\n  render() {\n    const {complete, text} = this.props.todo;\n\n    return (\n      <li>\n        <div>\n          <input\n            checked={complete}\n            type=\"checkbox\"\n          />\n          <label>\n            {text}\n          </label>\n        </div>\n      </li>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"From our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql#L112"},"schema"),", we know that we can query this data on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," type. However, we don't want to have to send a separate query for each todo item; that would defeat the purpose of using GraphQL over a traditional REST API. We could manually query for these fields directly in our ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," query, but that would hurt re-usability: what if we want to query the same set of fields as part of a different query? Additionally, we wouldn't know which component needs the data we're querying, which is a problem Relay directly tries to address."),(0,o.kt)("p",null,"Instead, we can define a reusable ",(0,o.kt)("a",{parentName:"p",href:"http://graphql.org/learn/queries/#fragments"},"Fragment"),", which allows us to define a set of fields on a type and reuse them within our queries wherever we need to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"fragment TodoItemFragment on Todo {\n  complete\n  text\n}\n")),(0,o.kt)("p",null,"Our component can then use this fragment to declare its data dependency on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," GraphQL type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Todo.js\n\n// OPTIONAL: Flow type generated after running `yarn relay`, defining an Object type with shape of the fragment:\nimport type {Todo_todo} from './__generated__/Todo_todo.graphql';\n\nimport React from 'react';\nimport {graphql, createFragmentContainer} from 'react-relay'\n\ntype Props = {\n  todo: Todo_todo\n}\n\nclass Todo extends React.Component<Props> {\n  render() {\n    const {complete, text} = this.props.todo;\n\n    return (\n      <li>\n        <div>\n          <input\n            checked={complete}\n            type=\"checkbox\"\n          />\n          <label>\n            {text}\n          </label>\n        </div>\n      </li>\n    );\n  }\n}\n\nexport default createFragmentContainer(\n  Todo,\n  // Each key specified in this object will correspond to a prop available to the component\n  {\n    todo: graphql`\n      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'\n      fragment Todo_todo on Todo {\n        complete\n        text\n      }\n    `\n  },\n)\n\n")),(0,o.kt)("p",null,"The above code highlights one of Relay's most important principles which is colocation of components with their data dependencies. This is beneficial for a few reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It becomes obvious at a glance what data is required to render a given component, without having to search which query in our app is fetching the required data."),(0,o.kt)("li",{parentName:"ul"},"As a corollary, the component is de-coupled from the query that renders it. We can change the data dependencies for the component without having to update the queries that render them or worrying about breaking other components.")),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/thinking-in-relay"},"Thinking in Relay")," guide for more details behind Relay's principles."),(0,o.kt)("p",null,"Before proceeding, don't forget to run the Relay Compiler with ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn relay"),"."),(0,o.kt)("h2",{id:"composing-fragments"},"Composing Fragments"),(0,o.kt)("p",null,"Given that ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/fragment-container"},"Fragment Containers")," are just React components, we can compose them as such. We can even re-use fragment containers within other fragment containers. As an example, let's see how we would define a ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoList")," component that just renders a list of todo items, and whether all have been completed or not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// TodoList.js\n\n// OPTIONAL: Flow type generated after running `yarn relay`, defining an Object type with shape of the fragment:\nimport type {TodoList_userTodoData} from './__generated__/TodoList_userTodoData.graphql';\n\nimport React from 'react';\nimport {graphql, createFragmentContainer} from 'react-relay';\n\ntype Props = {\n  userTodoData: TodoList_userTodoData,\n}\n\nclass TodoList extends React.Component<Props> {\n  render() {\n    const {userTodoData: {totalCount, completedCount, todos}} = this.props;\n\n    return (\n      <section>\n        <input\n          checked={totalCount === completedCount}\n          type=\"checkbox\"\n        />\n        <ul>\n          {todos.edges.map(edge =>\n            <Todo\n              key={edge.node.id}\n              // We pass the data required by Todo here\n              todo={edge.node}\n            />\n          )}\n        </ul>\n      </section>\n    );\n  }\n}\n\nexport default createFragmentContainer(\n  TodoList,\n  {\n    userTodoData: graphql`\n      # As a convention, we name the fragment as '<ComponentFileName>_<PropName>'\n      fragment TodoList_userTodoData on User {\n        todos(\n          first: 2147483647  # max GraphQLInt, to fetch all todos\n        ) {\n          edges {\n            node {\n              id,\n              # We use the fragment defined by the child Todo component here\n              ...Todo_todo,\n            },\n          },\n        },\n        id,\n        totalCount,\n        completedCount,\n      }\n    `,\n  },\n);\n")),(0,o.kt)("p",null,"As with the first fragment container we defined, ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoList")," declares it's data dependencies via a fragment. However, this component additionally re-uses the fragment previously defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," component, and passes the appropriate data when rendering the child ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," components (a.k.a. fragment containers)."),(0,o.kt)("p",null,"One final thing to note when composing fragment containers is that the parent will not have access to the data defined by the child container. Relay only allows components to access data they specifically ask for in GraphQL fragments \u2014 nothing more. This is called ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/thinking-in-relay#data-masking"},"Data Masking"),", and it's intentional to prevent components from depending on data they didn't declare as a dependency."),(0,o.kt)("h2",{id:"rendering-fragments"},"Rendering Fragments"),(0,o.kt)("p",null,"Now that we have some components (a.k.a fragment containers) that declare their data dependencies, we need to hook them up to a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," so that the data is actually fetched and rendered. Remember,\nfragment containers do not directly fetch data. Instead, containers declare a specification of the data needed to render, and Relay guarantees that this data is available before rendering."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," rendering these fragment containers could look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ViewerTodoList.js\nimport React from 'react';\nimport {graphql, QueryRenderer} from 'react-relay';\nimport TodoList from './TodoList'\n\nconst environment = // defined or imported above...\n\nexport default class ViewerTodoList extends React.Component {\n  render() {\n    return (\n      <QueryRenderer\n        environment={environment}\n        query={graphql`\n          query ViewerQuery {\n            viewer {\n              id\n              # Re-use the fragment here\n              ...TodoList_userTodoData\n            }\n          }\n        `}\n        variables={{}}\n        render={({error, props}) => {\n          if (error) {\n            return <div>Error!</div>;\n          }\n          if (!props) {\n            return <div>Loading...</div>;\n          }\n          return (\n            <div>\n              <div>Todo list for User {props.viewer.id}:</div>\n              <TodoList userTodoData={props.viewer} />\n            </div>\n          );\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Check out our docs for ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/fragment-container"},"Fragment Containers")," for more details, and our guides on ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/refetch-container"},"Refetch")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/pagination-container"},"Pagination")," for more advanced usage of containers."),(0,o.kt)("h2",{id:"mutating-data"},"Mutating Data"),(0,o.kt)("p",null,"Now that we know how to query for and render data, let's move on to changing our data. We know that to change any data in our server, we need to use GraphQL ",(0,o.kt)("a",{parentName:"p",href:"http://graphql.org/learn/queries/#mutations"},"Mutations"),"."),(0,o.kt)("p",null,"From our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql#L35"},"schema"),", we know that we have some mutations available to us, so let's start by writing a mutation to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"complete")," status of a given todo item (i.e. mark or unmark it as done):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {\n  changeTodoStatus(input: $input) {\n    todo {\n      id\n      complete\n    }\n  }\n}\n")),(0,o.kt)("p",null,"This mutation allows us to query back some data as a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/blob/main/todo/data/schema.graphql#L18"},"result of the mutation"),", so we're going to query for the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"complete")," status on the todo item."),(0,o.kt)("p",null,"In order to execute this mutation in Relay, we're going to write a new mutation using Relay's ",(0,o.kt)("inlineCode",{parentName:"p"},"commitMutation")," api:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ChangeTodoStatusMutation.js\nimport {graphql, commitMutation} from 'react-relay';\n\n// We start by defining our mutation from above using `graphql`\nconst mutation = graphql`\n  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {\n    changeTodoStatus(input: $input) {\n      todo {\n        id\n        complete\n      }\n    }\n  }\n`;\n\nfunction commit(\n  environment,\n  complete,\n  todo,\n) {\n  // Now we just call commitMutation with the appropriate parameters\n  return commitMutation(\n    environment,\n    {\n      mutation,\n      variables: {\n        input: {complete, id: todo.id},\n      },\n    }\n  );\n}\n\nexport default {commit};\n")),(0,o.kt)("p",null,"Whenever we call ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeTodoStatusMutation.commit(...)"),", Relay will send the mutation to the server and, in our case, upon receiving a response it will automatically update the local data store with the latest data from the server. This also means that upon receiving the response, Relay will ensure that any components (i.e. containers) that depend on the updated data are re-rendered."),(0,o.kt)("p",null,"In order to actually use this mutation in our component, we could update our ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," component in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Todo.js\n\n// ...\n\nclass Todo extends React.Component<Props> {\n  // Add a new event handler that fires off the mutation\n  _handleOnCheckboxChange = (e) => {\n    const complete = e.target.checked;\n    ChangeTodoStatusMutation.commit(\n      this.props.relay.environment,\n      complete,\n      this.props.todo,\n    );\n  };\n\n  render() {\n    // ...\n  }\n}\n\n// ...\n\n")),(0,o.kt)("h3",{id:"optimistic-updates"},"Optimistic Updates"),(0,o.kt)("p",null,"In our example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"complete")," status in our component won't be updated and re-rendered until we get a response back from the server, which won't make for a great user experience."),(0,o.kt)("p",null,"In order to make the experience better, we can configure our mutation to do an optimistic update. An optimistic update means immediately updating our local data with what we expect it to be if we get a successful response from the server, i.e. updating the data immediately assuming that the mutation request will succeed. If the request doesn't succeed, we can roll-back our update."),(0,o.kt)("p",null,"In Relay, there's a couple of options we can pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"commitMutation")," to enable optimistic updates. Let's see what that would look like in our ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeTodoStatusMutation"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ChangeTodoStatusMutation.js\n\n// ...\n\nfunction getOptimisticResponse(complete, todo) {\n  return {\n    changeTodoStatus: {\n      todo: {\n        complete: complete,\n        id: todo.id,\n      },\n    },\n  };\n}\n\nfunction commit(\n  environment,\n  complete,\n  todo\n) {\n  // Now we just call commitMutation with the appropriate parameters\n  return commitMutation(\n    environment,\n    {\n      mutation,\n      variables: {\n        input: {complete, id: todo.id},\n      },\n      optimisticResponse: getOptimisticResponse(complete, todo),\n    }\n  );\n}\n\nexport default {commit};\n")),(0,o.kt)("p",null,"In the simplest case above, we just need to pass an ",(0,o.kt)("inlineCode",{parentName:"p"},"optimisticResponse")," option, which should refer to an object having the same shape as the mutation response payload. When we pass this option, Relay will know to immediately update our local data with the optimistic response, and then update it with the actual server response or roll it back if an error occurs."),(0,o.kt)("p",null,"Please note that the actual query and response payload may not have the exact same shape as the selection in your code, because sometimes Relay will add extra fields for you during the compilation step, and you need to add these fields to your optimistic response. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Relay will add an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field if it exists on the type for caching purpose.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Relay will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," field if the type is an union or an interface."))),(0,o.kt)("p",null,"You can inspect the network request or response to see the exact shape."),(0,o.kt)("h3",{id:"updating-local-data-from-mutation-responses"},"Updating local data from mutation responses"),(0,o.kt)("p",null,"By default, Relay will know to update the fields on the records referenced by the mutation payload, (i.e. the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo")," in our example). However, this is only the simplest case. In some cases updating the local data isn't as simple as just updating the fields in a record."),(0,o.kt)("p",null,"For instance, we might be updating a collection of items, or we might be deleting a record entirely. For these more advanced scenarios Relay allows us to pass a set of options for us to control how we update the local data from a server response, including a set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/mutations#configs"},(0,o.kt)("inlineCode",{parentName:"a"},"configs"))," and an ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/mutations#using-updater-and-optimisticupdater"},(0,o.kt)("inlineCode",{parentName:"a"},"updater"))," function for full control over the update."),(0,o.kt)("p",null,"For more details and advanced use cases on mutations and updates, check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/v10.0.0/mutations"},"Mutations")," docs."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"This guide just scratches the surface of Relay's API. For more detailed docs and guides, check out our API Reference and Guides sections."))}m.isMDXComponent=!0}}]);