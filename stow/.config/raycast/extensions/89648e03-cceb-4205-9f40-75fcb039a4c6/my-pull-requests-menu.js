"use strict";var ca=Object.create;var Ee=Object.defineProperty;var ya=Object.getOwnPropertyDescriptor;var Sa=Object.getOwnPropertyNames;var da=Object.getPrototypeOf,ba=Object.prototype.hasOwnProperty;var Fe=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(r){throw e=[r],r}};var ne=(t,a)=>{for(var e in a)Ee(t,e,{get:a[e],enumerable:!0})},Pe=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Sa(a))!ba.call(t,n)&&n!==e&&Ee(t,n,{get:()=>a[n],enumerable:!(r=ya(a,n))||r.enumerable});return t},_=(t,a,e)=>(Pe(t,a,"default"),e&&Pe(e,a,"default")),N=(t,a,e)=>(e=t!=null?ca(da(t)):{},Pe(a||!t||!t.__esModule?Ee(e,"default",{value:t,enumerable:!0}):e,t)),Ia=t=>Pe(Ee({},"__esModule",{value:!0}),t);var v={};ne(v,{default:()=>It.default});var It,xe=Fe(()=>{_(v,require("formdata-polyfill/esm.min.js"));It=N(require("formdata-polyfill/esm.min.js"))});var B={};ne(B,{default:()=>Rt.default});var Rt,Ge=Fe(()=>{_(B,require("fetch-blob/from.js"));Rt=N(require("fetch-blob/from.js"))});var Pt={};ne(Pt,{toFormData:()=>Tr});function hr(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Tr(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new He(e[1]||e[2]),n,o,p,c,l,u,R=[],I=new v.FormData,x=S=>{p+=y.decode(S,{stream:!0})},U=S=>{R.push(S)},s=()=>{let S=new B.File(R,u,{type:l});I.append(c,S)},P=()=>{I.append(c,p)},y=new TextDecoder("utf-8");y.decode(),r.onPartBegin=function(){r.onPartData=x,r.onPartEnd=P,n="",o="",p="",c="",l="",u=null,R.length=0},r.onHeaderField=function(S){n+=y.decode(S,{stream:!0})},r.onHeaderValue=function(S){o+=y.decode(S,{stream:!0})},r.onHeaderEnd=function(){if(o+=y.decode(),n=n.toLowerCase(),n==="content-disposition"){let S=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);S&&(c=S[2]||S[3]||""),u=hr(o),u&&(r.onPartData=U,r.onPartEnd=s)}else n==="content-type"&&(l=o);o="",n=""};for await(let S of t)r.write(S);return r.end(),I}var Q,M,At,J,_e,ve,Dr,Ie,xr,Ur,_r,vr,te,He,Et=Fe(()=>{Ge();xe();Q=0,M={START_BOUNDARY:Q++,HEADER_FIELD_START:Q++,HEADER_FIELD:Q++,HEADER_VALUE_START:Q++,HEADER_VALUE:Q++,HEADER_VALUE_ALMOST_DONE:Q++,HEADERS_ALMOST_DONE:Q++,PART_DATA_START:Q++,PART_DATA:Q++,END:Q++},At=1,J={PART_BOUNDARY:At,LAST_BOUNDARY:At*=2},_e=10,ve=13,Dr=32,Ie=45,xr=58,Ur=97,_r=122,vr=t=>t|32,te=()=>{},He=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=te,this.onHeaderField=te,this.onHeadersEnd=te,this.onHeaderValue=te,this.onPartBegin=te,this.onPartData=te,this.onPartEnd=te,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let r=0;r<a.length;r++)e[r]=a.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=M.START_BOUNDARY}write(a){let e=0,r=a.length,n=this.index,{lookbehind:o,boundary:p,boundaryChars:c,index:l,state:u,flags:R}=this,I=this.boundary.length,x=I-1,U=a.length,s,P,y=d=>{this[d+"Mark"]=e},S=d=>{delete this[d+"Mark"]},b=(d,A,g,W)=>{(A===void 0||A!==g)&&this[d](W&&W.subarray(A,g))},m=(d,A)=>{let g=d+"Mark";g in this&&(A?(b(d,this[g],e,a),delete this[g]):(b(d,this[g],a.length,a),this[g]=0))};for(e=0;e<r;e++)switch(s=a[e],u){case M.START_BOUNDARY:if(l===p.length-2){if(s===Ie)R|=J.LAST_BOUNDARY;else if(s!==ve)return;l++;break}else if(l-1===p.length-2){if(R&J.LAST_BOUNDARY&&s===Ie)u=M.END,R=0;else if(!(R&J.LAST_BOUNDARY)&&s===_e)l=0,b("onPartBegin"),u=M.HEADER_FIELD_START;else return;break}s!==p[l+2]&&(l=-2),s===p[l+2]&&l++;break;case M.HEADER_FIELD_START:u=M.HEADER_FIELD,y("onHeaderField"),l=0;case M.HEADER_FIELD:if(s===ve){S("onHeaderField"),u=M.HEADERS_ALMOST_DONE;break}if(l++,s===Ie)break;if(s===xr){if(l===1)return;m("onHeaderField",!0),u=M.HEADER_VALUE_START;break}if(P=vr(s),P<Ur||P>_r)return;break;case M.HEADER_VALUE_START:if(s===Dr)break;y("onHeaderValue"),u=M.HEADER_VALUE;case M.HEADER_VALUE:s===ve&&(m("onHeaderValue",!0),b("onHeaderEnd"),u=M.HEADER_VALUE_ALMOST_DONE);break;case M.HEADER_VALUE_ALMOST_DONE:if(s!==_e)return;u=M.HEADER_FIELD_START;break;case M.HEADERS_ALMOST_DONE:if(s!==_e)return;b("onHeadersEnd"),u=M.PART_DATA_START;break;case M.PART_DATA_START:u=M.PART_DATA,y("onPartData");case M.PART_DATA:if(n=l,l===0){for(e+=x;e<U&&!(a[e]in c);)e+=I;e-=x,s=a[e]}if(l<p.length)p[l]===s?(l===0&&m("onPartData",!0),l++):l=0;else if(l===p.length)l++,s===ve?R|=J.PART_BOUNDARY:s===Ie?R|=J.LAST_BOUNDARY:l=0;else if(l-1===p.length)if(R&J.PART_BOUNDARY){if(l=0,s===_e){R&=~J.PART_BOUNDARY,b("onPartEnd"),b("onPartBegin"),u=M.HEADER_FIELD_START;break}}else R&J.LAST_BOUNDARY&&s===Ie?(b("onPartEnd"),u=M.END,R=0):l=0;if(l>0)o[l-1]=s;else if(n>0){let d=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);b("onPartData",0,n,d),n=0,y("onPartData"),e--}break;case M.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}m("onHeaderField"),m("onHeaderValue"),m("onPartData"),this.index=l,this.state=u,this.flags=R}end(){if(this.state===M.HEADER_FIELD_START&&this.index===0||this.state===M.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==M.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Yr={};ne(Yr,{default:()=>Kr});module.exports=Ia(Yr);var D=require("@raycast/api"),na=require("@raycast/utils"),Xe=require("react");var C=require("@raycast/api"),at=N(require("react")),ee=require("react/jsx-runtime");function ga(t,a=100){return t.length>a?t.slice(0,a)+" ...":t}function rt(t){let a=t.error,e=()=>{(0,C.launchCommand)({name:C.environment.commandName,type:C.LaunchType.UserInitiated})};return(0,ee.jsx)(C.MenuBarExtra,{icon:t.icon,isLoading:t.isLoading,title:t.title,tooltip:t.tooltip,children:a?(0,ee.jsx)(oe,{title:`Error: ${a}`,icon:{source:C.Icon.Warning},onAction:e}):t.children})}function oe(t){return(0,ee.jsx)(C.MenuBarExtra.Item,{title:ga(t.title),icon:t.icon,subtitle:t.subtitle,shortcut:t.shortcut,onAction:t.onAction,tooltip:t.tooltip})}function Ma(t,a){if(!a)return{shown:t,hidden:0};if(at.default.isValidElement(t))return{shown:[t],hidden:0};let e=t;if(!e||e.length<=0)return{shown:void 0,hidden:0};let r=a||10,n=e.slice(0,r),o=e.length-n.length;return{shown:n,hidden:o}}function ma(t,a){if(!(!t||t.length<=0))return t.join(a)}function je(t){let a=ma([t.title,t.subtitle].filter(o=>o)," "),{shown:e,hidden:r}=Ma(t.children,t.maxChildren),n=e===void 0||e.length<=0;return(0,ee.jsxs)(C.MenuBarExtra.Section,{title:a,children:[e,r>0&&t.moreElement&&t.moreElement(r),n&&t.emptyElement&&t.emptyElement]})}function nt(){return(0,ee.jsx)(C.MenuBarExtra.Item,{title:"Configure Command",shortcut:{modifiers:["cmd"],key:","},icon:C.Icon.Gear,onAction:()=>(0,C.openCommandPreferences)()})}function ot(t){let a=t.min||1,e=t.max||100,r=t.default||10,o=(0,C.getPreferenceValues)()[t.name]||"",p=Number(o);return isNaN(p)||p<a||p>e?r:p}var w=require("@raycast/api"),G=require("react/jsx-runtime");var st=({sortQuery:t,setSortQuery:a,data:e})=>a?(0,G.jsxs)(w.MenuBarExtra.Submenu,{title:"Sort By",icon:w.Icon.ArrowUp,children:[e.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,G.jsx)(it,{title:r,value:n,sortQuery:t??"",setSortQuery:a},n||"relevance")),e.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,G.jsx)(w.MenuBarExtra.Section,{title:"Most Reactions",children:e.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,G.jsx)(it,{title:r,value:n,sortQuery:t??"",setSortQuery:a},n))})]}):(0,G.jsx)(G.Fragment,{}),it=({title:t,value:a,sortQuery:e,setSortQuery:r})=>(0,G.jsx)(w.MenuBarExtra.Item,{title:t,icon:e===a?{source:w.Icon.CheckCircle,tintColor:w.Color.Green}:w.Icon.Circle,onAction:()=>r(a)});var St=require("@raycast/api"),fr=require("lodash");var i=N(require("graphql-tag")),ce=i.default`
  fragment ShortRepositoryFields on Repository {
    id
    defaultBranchRef {
      target {
        oid
      }
    }
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    mergeCommitAllowed
    squashMergeAllowed
    rebaseMergeAllowed
    autoMergeAllowed
  }
`,Ra=i.default`
  fragment DiscussionFields on Discussion {
    id
    title
    bodyText
    publishedAt
    repository {
      ...ShortRepositoryFields
    }
    url
    upvoteCount
    category {
      name
      emoji
      emojiHTML
    }
    comments {
      totalCount
    }
    answer {
      bodyText
    }
    author {
      login
      avatarUrl
    }
  }
  ${ce}
`,H=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ye=i.default`
  fragment AuthorFields on Actor {
    ... on Bot {
      id
      login
      avatarUrl(size: 64)
    }
    ... on User {
      ...UserFields
    }
    ... on Mannequin {
      id
      login
      avatarUrl(size: 64)
    }
    ... on Organization {
      id
      login
      name
      avatarUrl(size: 64)
    }
    ... on EnterpriseUserAccount {
      id
      login
      name
      avatarUrl(size: 64)
    }
  }
  ${H}
`,Ce=i.default`
  fragment IssueFields on Issue {
    id
    url
    title
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            id
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    comments(first: 0) {
      totalCount
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
  }
  ${ye}
  ${ce}
  ${H}
`,Aa=i.default`
  fragment IssueDetailFields on Issue {
    id
    url
    title
    body
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
        isDefault
      }
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 25) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${ye}
  ${ce}
  ${H}
`,Pa=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,ut=i.default`
  fragment ProjectFields on ProjectV2 {
    id
    title
    public
    number
    readme
    closed
    shortDescription
    url
    createdAt
    creator {
      ...AuthorFields
    }
    updatedAt
    views(first: 50) {
      totalCount
      nodes {
        ...ProjectViewerFields
      }
    }
    viewerCanClose
    viewerCanUpdate
    viewerCanReopen
  }
  ${ye}
  ${Pa}
`,pt=i.default`
  fragment PullRequestFields on PullRequest {
    id
    title
    permalink
    merged
    number
    isDraft
    closed
    updatedAt
    mergeable
    milestone {
      id
      title
    }
    reviewDecision
    repository {
      ...ShortRepositoryFields
    }
    headRefName
    headRef {
      name
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewThreads(first: 100) {
      totalCount
      nodes {
        comments(first: 0) {
          totalCount
        }
      }
    }
    reviews(first: 100) {
      totalCount
      nodes {
        bodyText
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
  }
  ${ce}
  ${ye}
  ${H}
`,Ea=i.default`
  fragment PullRequestDetailsFields on PullRequest {
    id
    title
    body
    permalink
    merged
    number
    isDraft
    closed
    createdAt
    updatedAt
    additions
    deletions
    mergeable
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    baseRefName
    baseRef {
      name
    }
    headRefName
    headRef {
      name
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
      }
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewRequests(first: 50) {
      totalCount
      nodes {
        requestedReviewer {
          ... on Team {
            id
            teamName: name
            teamAvatarURL: avatarUrl(size: 64)
          }
          ... on User {
            id
            githubUsername: login
            userName: name
            userAvatarURL: avatarUrl(size: 64)
          }
          ... on Mannequin {
            id
            githubUsername: login
            userAvatarURL: avatarUrl(size: 64)
          }
        }
      }
    }
    reviews(first: 10, states: [PENDING, APPROVED, CHANGES_REQUESTED]) {
      totalCount
      nodes {
        state
        author {
          ...AuthorFields
        }
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 20) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${ce}
  ${ye}
  ${H}
`,Ca=i.default`
  fragment PullRequestCommitFields on PullRequest {
    commits(last: $numberOfItems, before: $before) {
      totalCount
      nodes {
        commit {
          id
          authoredDate
          message
          oid
          abbreviatedOid
          author {
            avatarUrl(size: 64)
            name
          }
          statusCheckRollup {
            state
          }
          url
          treeUrl
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
`,lt=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,ke=i.default`
  fragment ExtendedRepositoryFields on Repository {
    id
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    updatedAt
    pushedAt
    stargazerCount
    isArchived
    isFork
    isPrivate
    viewerHasStarred
    primaryLanguage {
      id
      name
      color
    }
  }
`,fa=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Da=i.default`
  mutation createLinkedBranch($input: CreateLinkedBranchInput!) {
    createLinkedBranch(input: $input) {
      clientMutationId
      linkedBranch {
        ref {
          id
          name
        }
      }
    }
  }
`,xa=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ua=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,_a=i.default`
  query searchDiscussions($query: String!, $numberOfItems: Int!, $after: String) {
    searchDiscussions: search(query: $query, type: DISCUSSION, first: $numberOfItems, after: $after) {
      nodes {
        ...DiscussionFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Ra}
`,va=i.default`
  query getGitHubDiscussionNumber($filter: String!) {
    search(query: $filter, type: DISCUSSION, first: 1) {
      nodes {
        ... on Discussion {
          number
          url
        }
      }
    }
  }
`,ha=i.default`
  query repositoryCollaboratorsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      issue(number: $issueNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${H}
`,Ta=i.default`
  query repositoryProjectsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      issue(number: $issueNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,wa=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Aa}
`,Ba=i.default`
  query searchIssues($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      nodes {
        ...IssueFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Ce}
`,Oa=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ce}
`,La=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Va=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Na=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,qa=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Fa=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ja=i.default`
  mutation createIssue(
    $repositoryId: ID!
    $title: String!
    $body: String!
    $assigneeIds: [ID!]!
    $labelIds: [ID!]!
    $milestoneId: ID
    $issueTypeId: ID
  ) {
    createIssue(
      input: {
        repositoryId: $repositoryId
        title: $title
        body: $body
        assigneeIds: $assigneeIds
        labelIds: $labelIds
        milestoneId: $milestoneId
        issueTypeId: $issueTypeId
      }
    ) {
      issue {
        ...IssueFields
      }
    }
  }
  ${Ce}
`,ka=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,za=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${ut}
`,Ga=i.default`
  query searchPullRequests($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      edges {
        node {
          ...PullRequestFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${pt}
`,Ha=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Ea}
`,Qa=i.default`
  query repositoryCollaboratorsForPullRequests(
    $owner: String!
    $name: String!
    $pullRequestNumber: Int!
    $searchQuery: String
  ) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25, query: $searchQuery) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      pullRequest(number: $pullRequestNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${H}
`,$a=i.default`
  query repositoryProjectsForPullRequests($owner: String!, $name: String!, $pullRequestNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      pullRequest(number: $pullRequestNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,Wa=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Ca}
`,Ka=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ya=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Xa=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ja=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Za=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,er=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,tr=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,ar=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,rr=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,nr=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,or=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,ir=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,sr=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ur=i.default`
  mutation createPullRequest(
    $repositoryId: ID!
    $into: String!
    $from: String!
    $title: String!
    $body: String!
    $isDraft: Boolean!
  ) {
    createPullRequest(
      input: {
        repositoryId: $repositoryId
        baseRefName: $into
        headRefName: $from
        title: $title
        body: $body
        draft: $isDraft
      }
    ) {
      pullRequest {
        id
      }
    }
  }
`,pr=i.default`
  mutation initPullRequest(
    $pullRequestId: ID!
    $reviewersIds: [ID!]!
    $assigneeIds: [ID!]!
    $labelsIds: [ID!]!
    $milestoneId: ID
  ) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: $reviewersIds }) {
      pullRequest {
        id
        reviewRequests {
          totalCount
        }
      }
    }
    updatePullRequest(
      input: {
        pullRequestId: $pullRequestId
        assigneeIds: $assigneeIds
        labelIds: $labelsIds
        milestoneId: $milestoneId
      }
    ) {
      pullRequest {
        ...PullRequestFields
      }
    }
  }
  ${pt}
`,lr=i.default`
  query searchRepositories($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, first: $numberOfItems, after: $after, type: REPOSITORY) {
      nodes {
        ...ExtendedRepositoryFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${ke}
`,cr=i.default`
  query myLatestRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: RepositoryOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      repositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${ke}
`,yr=i.default`
  query milestonesForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      milestones(first: 25, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
    }
  }
`,Sr=i.default`
  query commentsForPullRequest($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        comments(first: 100) {
          nodes {
            author {
              login
            }
            body
          }
        }
      }
    }
  }
`,dr=i.default`
  query dataForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      mergeCommitAllowed
      squashMergeAllowed
      rebaseMergeAllowed
      autoMergeAllowed
      defaultBranchRef {
        id
        name
        target {
          ...CommitFields
        }
      }
      issueTypes(orderBy: { direction: ASC, field: NAME }, first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isEnabled
        }
      }
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50) {
        totalCount
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
      collaborators(first: 50) {
        totalCount
        nodes {
          ...UserFields
        }
      }
      labels(first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isDefault
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          id
          title
        }
      }
      milestones(first: 50, states: OPEN, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
        }
      }
      owner {
        __typename
        ... on Organization {
          projectsV2(first: 50) {
            totalCount
            nodes {
              id
              title
            }
          }
        }
      }
      pullRequestTemplates {
        body
      }
      issueTemplates {
        name
        about
        title
        body
      }
    }
  }
  ${lt}
  ${H}
`,br=i.default`
  query searchRepositoryBranches($owner: String!, $name: String!, $query: String!) {
    repository(owner: $owner, name: $name) {
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50, query: $query) {
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
    }
  }
  ${lt}
`,Ir=i.default`
  query repositoryIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      url
      defaultBranchRef {
        id
        name
        target {
          oid
        }
      }
      issues(first: 50, states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          ...IssueFields
        }
      }
    }
  }
  ${Ce}
`,gr=i.default`
  query repositoryReleases($name: String!, $owner: String!, $numberOfItems: Int!, $after: String) {
    repository(name: $name, owner: $owner) {
      ... on Repository {
        releases(first: $numberOfItems, after: $after, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            ...ReleaseFields
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
  ${fa}
`,Mr=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,mr=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Rr=i.default`
  query myStarredRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: StarOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      starredRepositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${ke}
`,Ar=i.default`
  query getViewer {
    viewer {
      ...UserFields
      organizations(first: 50) {
        totalCount
        nodes {
          avatarUrl
          login
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          ...ProjectFields
        }
      }
    }
  }
  ${H}
  ${ut}
`,Pr=i.default`
  query getViewerStats {
    viewer {
      ...UserFields
      bio
      company
      location
      url
      websiteUrl
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      pullRequestsAuthored: pullRequests {
        totalCount
      }
      pullRequestsMerged: pullRequests(states: [MERGED]) {
        totalCount
      }
      pullRequestsOpen: pullRequests(states: [OPEN]) {
        totalCount
      }
      issuesAuthored: issues {
        totalCount
      }
      issuesOpen: issues(states: [OPEN]) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
      }
      publicRepos: repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
      }
      ownedRepositories: repositories(ownerAffiliations: OWNER) {
        totalCount
      }
    }
    rateLimit {
      remaining
      limit
      used
      resetAt
    }
  }
  ${H}
`,Er=i.default`
  query getViewerStatsDetails($repositoriesCount: Int = 100) {
    viewer {
      recentPullRequests: pullRequests(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenPullRequests: pullRequests(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      recentIssues: issues(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenIssues: issues(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      ownedRepositories: repositories(
        first: $repositoriesCount
        ownerAffiliations: OWNER
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          nameWithOwner
          url
          stargazerCount
          forkCount
        }
      }
      organizations(first: 20) {
        nodes {
          id
          login
          name
          avatarUrl
          url
        }
      }
    }
  }
`,Cr=(t,a,e,r)=>t();function ct(t,a=Cr){return{createLinkedBranch(e,r,n){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return a(o=>t.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return a(o=>t.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return a(o=>t.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return a(o=>t.request({document:er,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return a(o=>t.request({document:or,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return a(o=>t.request({document:cr,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return a(o=>t.request({document:yr,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return a(o=>t.request({document:Sr,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return a(o=>t.request({document:dr,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return a(o=>t.request({document:br,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return a(o=>t.request({document:Ir,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return a(o=>t.request({document:gr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return a(o=>t.request({document:Mr,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return a(o=>t.request({document:mr,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return a(o=>t.request({document:Rr,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return a(o=>t.request({document:Ar,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return a(o=>t.request({document:Pr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return a(o=>t.request({document:Er,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var yt=require("@raycast/api");var dt=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],bt="sort:updated-desc";var $t=require("@raycast/utils");var Ft=require("@octokit/rest"),jt=require("@raycast/api"),kt=require("@raycast/utils"),zt=require("graphql-request");var Nt=N(require("node:http"),1),qt=N(require("node:https"),1),re=N(require("node:zlib"),1),V=N(require("node:stream"),1),me=require("node:buffer");var Se={};ne(Se,{default:()=>fe.default});_(Se,require("data-uri-to-buffer"));var fe=N(require("data-uri-to-buffer"));var q=N(require("node:stream"),1),Y=require("node:util"),O=require("node:buffer");var de={};ne(de,{default:()=>De.default});_(de,require("fetch-blob"));var De=N(require("fetch-blob"));xe();var K=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var h=class extends K{constructor(a,e,r){super(a,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ue=Symbol.toStringTag,ze=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ue]==="URLSearchParams",be=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ue]),gt=t=>typeof t=="object"&&(t[Ue]==="AbortSignal"||t[Ue]==="EventTarget"),Mt=(t,a)=>{let e=new URL(a).hostname,r=new URL(t).hostname;return e===r||e.endsWith(`.${r}`)},mt=(t,a)=>{let e=new URL(a).protocol,r=new URL(t).protocol;return e===r};var wr=(0,Y.promisify)(q.default.pipeline),T=Symbol("Body internals"),$=class{constructor(a,{size:e=0}={}){let r=null;a===null?a=null:ze(a)?a=O.Buffer.from(a.toString()):be(a)||O.Buffer.isBuffer(a)||(Y.types.isAnyArrayBuffer(a)?a=O.Buffer.from(a):ArrayBuffer.isView(a)?a=O.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof q.default||(a instanceof v.FormData?(a=(0,v.formDataToBlob)(a),r=a.type.split("=")[1]):a=O.Buffer.from(String(a))));let n=a;O.Buffer.isBuffer(a)?n=q.default.Readable.from(a):be(a)&&(n=q.default.Readable.from(a.stream())),this[T]={body:a,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,a instanceof q.default&&a.on("error",o=>{let p=o instanceof K?o:new h(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[T].error=p})}get body(){return this[T].stream}get bodyUsed(){return this[T].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:r}=await Qe(this);return a.slice(e,e+r)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let r=new v.FormData,n=new URLSearchParams(await this.text());for(let[o,p]of n)r.append(o,p);return r}let{toFormData:e}=await Promise.resolve().then(()=>(Et(),Pt));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[T].body&&this[T].body.type||"",e=await this.arrayBuffer();return new De.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await Qe(this);return new TextDecoder().decode(a)}buffer(){return Qe(this)}};$.prototype.buffer=(0,Y.deprecate)($.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties($.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Y.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Qe(t){if(t[T].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[T].disturbed=!0,t[T].error)throw t[T].error;let{body:a}=t;if(a===null)return O.Buffer.alloc(0);if(!(a instanceof q.default))return O.Buffer.alloc(0);let e=[],r=0;try{for await(let n of a){if(t.size>0&&r+n.length>t.size){let o=new h(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof K?n:new h(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?O.Buffer.from(e.join("")):O.Buffer.concat(e,r)}catch(n){throw new h(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new h(`Premature close of server response while trying to fetch ${t.url}`)}var ie=(t,a)=>{let e,r,{body:n}=t[T];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof q.default&&typeof n.getBoundary!="function"&&(e=new q.PassThrough({highWaterMark:a}),r=new q.PassThrough({highWaterMark:a}),n.pipe(e),n.pipe(r),t[T].stream=e,n=r),n},Br=(0,Y.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),he=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":ze(t)?"application/x-www-form-urlencoded;charset=UTF-8":be(t)?t.type||null:O.Buffer.isBuffer(t)||Y.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof v.FormData?`multipart/form-data; boundary=${a[T].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${Br(t)}`:t instanceof q.default?null:"text/plain;charset=UTF-8",Ct=t=>{let{body:a}=t[T];return a===null?0:be(a)?a.size:O.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},ft=async(t,{body:a})=>{a===null?t.end():await wr(a,t)};var $e=require("node:util"),ge=N(require("node:http"),1),Te=typeof ge.default.validateHeaderName=="function"?ge.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},We=typeof ge.default.validateHeaderValue=="function"?ge.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},L=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let r=a.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(p=>[n,p]))}else if(a!=null)if(typeof a=="object"&&!$e.types.isBoxedPrimitive(a)){let r=a[Symbol.iterator];if(r==null)e.push(...Object.entries(a));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(n=>{if(typeof n!="object"||$e.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(Te(r),We(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(p,c)=>(Te(p),We(p,String(c)),URLSearchParams.prototype[n].call(r,String(p).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return p=>(Te(p),URLSearchParams.prototype[n].call(r,String(p).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(a)&&(r=r.toLowerCase()),r}forEach(a,e=void 0){for(let r of this.keys())Reflect.apply(a,e,[this.get(r),r,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let r=this.getAll(e);return e==="host"?a[e]=r[0]:a[e]=r.length>1?r:r[0],a},{})}};Object.defineProperties(L.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function Dt(t=[]){return new L(t.reduce((a,e,r,n)=>(r%2===0&&a.push(n.slice(r,r+2)),a),[]).filter(([a,e])=>{try{return Te(a),We(a,String(e)),!0}catch{return!1}}))}var Or=new Set([301,302,303,307,308]),we=t=>Or.has(t);var k=Symbol("Response internals"),F=class t extends ${constructor(a=null,e={}){super(a,e);let r=e.status!=null?e.status:200,n=new L(e.headers);if(a!==null&&!n.has("Content-Type")){let o=he(a,this);o&&n.append("Content-Type",o)}this[k]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[k].type}get url(){return this[k].url||""}get status(){return this[k].status}get ok(){return this[k].status>=200&&this[k].status<300}get redirected(){return this[k].counter>0}get statusText(){return this[k].statusText}get headers(){return this[k].headers}get highWaterMark(){return this[k].highWaterMark}clone(){return new t(ie(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!we(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[k].type="error",a}static json(a=void 0,e={}){let r=JSON.stringify(a);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new L(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(F.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ot=require("node:url"),Lt=require("node:util");var xt=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var _t=require("node:net");function Ut(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var vt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ht="strict-origin-when-cross-origin";function Tt(t){if(!vt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function Lr(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,_t.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function se(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:Lr(t)}function wt(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=Ut(n),p=Ut(n,!0);o.toString().length>4096&&(o=p),a&&(o=a(o)),e&&(p=e(p));let c=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return p;case"unsafe-url":return o;case"strict-origin":return se(o)&&!se(c)?"no-referrer":p.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:se(o)&&!se(c)?"no-referrer":p;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:p;case"no-referrer-when-downgrade":return se(o)&&!se(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Bt(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of a)r&&vt.has(r)&&(e=r);return e}var f=Symbol("Request internals"),Me=t=>typeof t=="object"&&typeof t[f]=="object",Vr=(0,Lt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ae=class t extends ${constructor(a,e={}){let r;if(Me(a)?r=new URL(a.url):(r=new URL(a),a={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Me(e)&&"data"in e&&Vr(),(e.body!=null||Me(a)&&a.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:Me(a)&&a.body!==null?ie(a):null;super(o,{size:e.size||a.size||0});let p=new L(e.headers||a.headers||{});if(o!==null&&!p.has("Content-Type")){let u=he(o,this);u&&p.set("Content-Type",u)}let c=Me(a)?a.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!gt(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let l=e.referrer==null?a.referrer:e.referrer;if(l==="")l="no-referrer";else if(l){let u=new URL(l);l=/^about:(\/\/)?client$/.test(u)?"client":u}else l=void 0;this[f]={method:n,redirect:e.redirect||a.redirect||"follow",headers:p,parsedURL:r,signal:c,referrer:l},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[f].method}get url(){return(0,Ot.format)(this[f].parsedURL)}get headers(){return this[f].headers}get redirect(){return this[f].redirect}get signal(){return this[f].signal}get referrer(){if(this[f].referrer==="no-referrer")return"";if(this[f].referrer==="client")return"about:client";if(this[f].referrer)return this[f].referrer.toString()}get referrerPolicy(){return this[f].referrerPolicy}set referrerPolicy(a){this[f].referrerPolicy=Tt(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ae.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Vt=t=>{let{parsedURL:a}=t[f],e=new L(t[f].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let c=Ct(t);typeof c=="number"&&!Number.isNaN(c)&&(r=String(c))}r&&e.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=ht),t.referrer&&t.referrer!=="no-referrer"?t[f].referrer=wt(t):t[f].referrer="no-referrer",t[f].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(a));let o=xt(a),p={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:a,options:p}};var Be=class extends K{constructor(a,e="aborted"){super(a,e)}};xe();Ge();var Nr=new Set(["data:","http:","https:"]);async function Oe(t,a){return new Promise((e,r)=>{let n=new ae(t,a),{parsedURL:o,options:p}=Vt(n);if(!Nr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let s=(0,fe.default)(n.url),P=new F(s,{headers:{"Content-Type":s.typeFull}});e(P);return}let c=(o.protocol==="https:"?qt.default:Nt.default).request,{signal:l}=n,u=null,R=()=>{let s=new Be("The operation was aborted.");r(s),n.body&&n.body instanceof V.default.Readable&&n.body.destroy(s),!(!u||!u.body)&&u.body.emit("error",s)};if(l&&l.aborted){R();return}let I=()=>{R(),U()},x=c(o.toString(),p);l&&l.addEventListener("abort",I);let U=()=>{x.abort(),l&&l.removeEventListener("abort",I)};x.on("error",s=>{r(new h(`request to ${n.url} failed, reason: ${s.message}`,"system",s)),U()}),qr(x,s=>{u&&u.body&&u.body.destroy(s)}),process.version<"v14"&&x.on("socket",s=>{let P;s.prependListener("end",()=>{P=s._eventsCount}),s.prependListener("close",y=>{if(u&&P<s._eventsCount&&!y){let S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",S)}})}),x.on("response",s=>{x.setTimeout(0);let P=Dt(s.rawHeaders);if(we(s.statusCode)){let d=P.get("Location"),A=null;try{A=d===null?null:new URL(d,n.url)}catch{if(n.redirect!=="manual"){r(new h(`uri requested responds with an invalid redirect URL: ${d}`,"invalid-redirect")),U();return}}switch(n.redirect){case"error":r(new h(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),U();return;case"manual":break;case"follow":{if(A===null)break;if(n.counter>=n.follow){r(new h(`maximum redirect reached at: ${n.url}`,"max-redirect")),U();return}let g={headers:new L(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ie(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Mt(n.url,A)||!mt(n.url,A))for(let Ae of["authorization","www-authenticate","cookie","cookie2"])g.headers.delete(Ae);if(s.statusCode!==303&&n.body&&a.body instanceof V.default.Readable){r(new h("Cannot follow redirect with body being a readable stream","unsupported-redirect")),U();return}(s.statusCode===303||(s.statusCode===301||s.statusCode===302)&&n.method==="POST")&&(g.method="GET",g.body=void 0,g.headers.delete("content-length"));let W=Bt(P);W&&(g.referrerPolicy=W),e(Oe(new ae(A,g))),U();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}l&&s.once("end",()=>{l.removeEventListener("abort",I)});let y=(0,V.pipeline)(s,new V.PassThrough,d=>{d&&r(d)});process.version<"v12.10"&&s.on("aborted",I);let S={url:n.url,status:s.statusCode,statusText:s.statusMessage,headers:P,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},b=P.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||b===null||s.statusCode===204||s.statusCode===304){u=new F(y,S),e(u);return}let m={flush:re.default.Z_SYNC_FLUSH,finishFlush:re.default.Z_SYNC_FLUSH};if(b==="gzip"||b==="x-gzip"){y=(0,V.pipeline)(y,re.default.createGunzip(m),d=>{d&&r(d)}),u=new F(y,S),e(u);return}if(b==="deflate"||b==="x-deflate"){let d=(0,V.pipeline)(s,new V.PassThrough,A=>{A&&r(A)});d.once("data",A=>{(A[0]&15)===8?y=(0,V.pipeline)(y,re.default.createInflate(),g=>{g&&r(g)}):y=(0,V.pipeline)(y,re.default.createInflateRaw(),g=>{g&&r(g)}),u=new F(y,S),e(u)}),d.once("end",()=>{u||(u=new F(y,S),e(u))});return}if(b==="br"){y=(0,V.pipeline)(y,re.default.createBrotliDecompress(),d=>{d&&r(d)}),u=new F(y,S),e(u);return}u=new F(y,S),e(u)}),ft(x,n).catch(r)})}function qr(t,a){let e=me.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",p=>{let{headers:c}=p;r=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),t.on("socket",p=>{let c=()=>{if(r&&!n){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},l=u=>{n=me.Buffer.compare(u.slice(-5),e)===0,!n&&o&&(n=me.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&me.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};p.prependListener("close",c),p.on("data",l),t.on("close",()=>{p.removeListener("close",c),p.removeListener("data",l)})})}var Ke=null,Ye=null,Gt=null,Fr=(0,jt.getPreferenceValues)();function jr({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;Gt=t,Ke=ct(new zt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Ye=new Ft.Octokit({auth:t,request:{fetch:Oe}})}var Ht=kt.OAuthService.github({personalAccessToken:Fr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:jr});function Qt(){if(!Ke||!Ye)throw new Error("GitHub clients not initialized");return{github:Ke,octokit:Ye,token:Gt}}var Wt=(0,$t.withAccessToken)(Ht);var Zt=require("@raycast/api"),ea=require("@raycast/utils"),Ve=require("date-fns"),ta=require("lodash");function Kt(t,a,{suffix:e="s",withNumber:r=!1}={}){let n=`${a}${t!==1?e:""}`;return r?`${t} ${n}`:n}var Le=require("node:child_process");var Xt=require("node:util"),j=require("@raycast/api"),kr=require("@raycast/utils");var wo=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:j.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:j.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:j.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:j.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:j.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:j.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:j.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:j.Color.PrimaryText}}];var zr=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Gr=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],Hr=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Bo=zr[0].value,Oo=Gr[0].value,Lo=Hr[0].value;var Vo=(0,Xt.promisify)(Le.execFile);var Re="\x1B",Yt="\x07",No=new RegExp(`${Re}][^${Yt}${Re}]*(?:${Yt}|${Re}\\\\)`,"g"),qo=new RegExp(`${Re}\\[[0-9;?]*[A-Za-z]`,"g"),Fo=new RegExp(`${Re}\\([0-9A-Za-z]`,"g");function Jt(t,a,e){if(e)return`repo:${e}`;let r=a.filter(Boolean);return t==="all"?"":t==="exclude"?r.map(n=>`-repo:${n}`).join(" "):r.map(n=>`repo:${n}`).join(" ")}function aa({repository:t,sortQuery:a,includeMentioned:e,includeAssigned:r,includeRecentlyClosed:n,includeReviewRequests:o,includeReviewed:p,includeDrafts:c,filterMode:l,repositoryList:u}){let{github:R}=Qt(),{data:I,...x}=(0,ea.useCachedPromise)(async(E,Z,X,Je,ue,Ze,et,ia,sa,ua)=>{let pe=`updated:>${(0,Ve.format)((0,Ve.subDays)(Date.now(),14),"yyyy-MM-dd")}`,le=ia?"":"draft:false",pa=Jt(sa,ua,E),{includeTeamReviewRequests:la}=(0,Zt.getPreferenceValues)(),tt=la?"review-requested":"user-review-requested";return(await Promise.all([`is:pr author:@me archived:false is:open ${le}`,...ue?[`is:pr author:@me archived:false is:closed ${pe}`]:[],...X?[`is:pr assignee:@me archived:false is:open ${le}`]:[],...X&&ue?[`is:pr assignee:@me archived:false is:closed ${pe}`]:[],...Je?[`is:pr mentions:@me archived:false is:open ${le}`]:[],...Je&&ue?[`is:pr mentions:@me archived:false is:closed ${pe}`]:[],...Ze?[`is:pr ${tt}:@me archived:false is:open ${le}`]:[],...Ze&&ue?[`is:pr ${tt}:@me archived:false is:closed ${pe}`]:[],...et?[`is:pr reviewed-by:@me archived:false is:open ${le}`]:[],...et&&ue?[`is:pr reviewed-by:@me archived:false is:closed ${pe}`]:[]].map(Ne=>R.searchPullRequests({query:`${Ne} ${Z} ${pa}`,numberOfItems:20})))).map(Ne=>Ne.search.edges?.map(qe=>qe?.node).filter(qe=>qe!=null))},[t,a,r,e,n,o,p,c,l,u]),U,s,P,y,S,b,m,d,A,g;if(I){let E=0;U=I[E++],n&&(s=I[E++]),r&&(P=I[E++],n&&(y=I[E++])),e&&(S=I[E++],n&&(b=I[E++])),o&&(m=I[E++],n&&(d=I[E++])),p&&(A=I[E++],n&&(g=I[E++]))}let W=(0,ta.uniqBy)([...s||[],...y||[],...b||[],...d||[],...g||[]],"id"),Ae=[];function oa(E){let Z=E?.filter(X=>!Ae.includes(X.id));return Ae.push(...Z?.map(X=>X.id)??[]),Z}return{data:[{type:"Open",pullRequests:U},{type:"Assigned",pullRequests:P},{type:"Mentioned",pullRequests:S},{type:"Review Requests",pullRequests:m},{type:"Reviewed",pullRequests:A},{type:"Recently Closed",pullRequests:W}].filter(E=>E.pullRequests&&E.pullRequests.length>0).map(E=>{let Z=oa(E.pullRequests),X=Kt(Z?.length??0,"pull request",{withNumber:!0});return{...E,subtitle:X,pullRequests:Z}}),...x}}var z=require("react/jsx-runtime");async function ra(){return(0,D.launchCommand)({name:"my-pull-requests",type:D.LaunchType.UserInitiated})}function Qr(){return ot({name:"maxitems"})}function $r(t){if(t.merged)return"pull-request-merged.svg";if(t.closed)return"pull-request-closed.svg";if(t.isDraft)return"pull-request-draft.svg";if(t.isInMergeQueue)return"pull-request-merge-queue.svg";switch(t.commits.nodes?t.commits.nodes[0]?.commit.statusCheckRollup?.state:null){case"SUCCESS":return D.Icon.Check;case"ERROR":case"FAILURE":return D.Icon.Xmark;case"PENDING":return D.Icon.Clock;default:return"pull-request-open.svg"}}function Wr(){let t=(0,D.getPreferenceValues)(),{showtext:a,includeAssigned:e,includeMentioned:r,includeReviewed:n,includeReviewRequests:o,includeRecentlyClosed:p,includeDrafts:c,useUnreadIndicator:l,repositoryFilterMode:u,repositoryList:R}=t,I=(0,Xe.useMemo)(()=>R?R.split(",").map(b=>b.trim()).filter(b=>b.length>0):[],[R]),[x,U]=(0,na.useCachedState)("sort-query",bt,{cacheNamespace:"github-my-pr-menu"}),{data:s,isLoading:P}=aa({repository:null,sortQuery:x,includeAssigned:e,includeMentioned:r,includeRecentlyClosed:p,includeReviewRequests:o,includeReviewed:n,includeDrafts:c,filterMode:u,repositoryList:I}),y=(0,Xe.useMemo)(()=>!s||u==="all"||I.length===0?s:s.map(b=>{let m=b.pullRequests?.filter(d=>{if(!d)return!1;let A=d.repository.nameWithOwner,g=I.some(W=>W.toLowerCase()===A.toLowerCase());return u==="include"?g:!g});return{...b,pullRequests:m}}),[s,I,u]),S=y?.reduce((b,m)=>b+(m.pullRequests??[]).length,0);return(0,z.jsxs)(rt,{title:a?`${S}`:void 0,icon:{source:`pull-request-open${l&&S>0?"-unread":""}.svg`,tintColor:D.Color.PrimaryText},isLoading:P,children:[y?.map(b=>(0,z.jsx)(je,{title:b.type,maxChildren:Qr(),moreElement:m=>(0,z.jsx)(oe,{title:`... ${m} more`,onAction:()=>ra()}),emptyElement:(0,z.jsx)(oe,{title:"No Pull Requests"}),children:b.pullRequests?.map(m=>m?(0,z.jsx)(oe,{title:`#${m.number} ${m.title}`,icon:{source:$r(m),tintColor:D.Color.PrimaryText},tooltip:m.repository.nameWithOwner,onAction:()=>(0,D.open)(m.permalink)},m.id):null)},b.type)),(0,z.jsxs)(je,{children:[(0,z.jsx)(oe,{title:"Open My Pull Requests",icon:D.Icon.AppWindowList,shortcut:D.Keyboard.Shortcut.Common.Open,onAction:()=>ra()}),(0,z.jsx)(st,{sortQuery:x,setSortQuery:U,data:dt}),(0,z.jsx)(nt,{})]})]})}var Kr=Wt(Wr);
