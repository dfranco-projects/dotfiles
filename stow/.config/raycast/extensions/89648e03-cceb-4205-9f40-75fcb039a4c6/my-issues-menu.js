"use strict";var Jt=Object.create;var Me=Object.defineProperty;var Zt=Object.getOwnPropertyDescriptor;var ea=Object.getOwnPropertyNames;var ta=Object.getPrototypeOf,aa=Object.prototype.hasOwnProperty;var Be=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(r){throw e=[r],r}};var ae=(t,a)=>{for(var e in a)Me(t,e,{get:a[e],enumerable:!0})},ge=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of ea(a))!aa.call(t,n)&&n!==e&&Me(t,n,{get:()=>a[n],enumerable:!(r=Zt(a,n))||r.enumerable});return t},U=(t,a,e)=>(ge(t,a,"default"),e&&ge(e,a,"default")),V=(t,a,e)=>(e=t!=null?Jt(ta(t)):{},ge(a||!t||!t.__esModule?Me(e,"default",{value:t,enumerable:!0}):e,t)),ra=t=>ge(Me({},"__esModule",{value:!0}),t);var _={};ae(_,{default:()=>ot.default});var ot,Pe=Be(()=>{U(_,require("formdata-polyfill/esm.min.js"));ot=V(require("formdata-polyfill/esm.min.js"))});var w={};ae(w,{default:()=>pt.default});var pt,Ne=Be(()=>{U(w,require("fetch-blob/from.js"));pt=V(require("fetch-blob/from.js"))});var ct={};ae(ct,{toFormData:()=>mr});function Mr(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function mr(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new qe(e[1]||e[2]),n,o,p,c,l,u,g=[],D=new _.FormData,A=d=>{p+=S.decode(d,{stream:!0})},m=d=>{g.push(d)},i=()=>{let d=new w.File(g,u,{type:l});D.append(c,d)},R=()=>{D.append(c,p)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=A,r.onPartEnd=R,n="",o="",p="",c="",l="",u=null,g.length=0},r.onHeaderField=function(d){n+=S.decode(d,{stream:!0})},r.onHeaderValue=function(d){o+=S.decode(d,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let d=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);d&&(c=d[2]||d[3]||""),u=Mr(o),u&&(r.onPartData=m,r.onPartEnd=i)}else n==="content-type"&&(l=o);o="",n=""};for await(let d of t)r.write(d);return r.end(),D}var H,b,lt,X,Ce,fe,Sr,ye,dr,br,Ir,gr,Z,qe,yt=Be(()=>{Ne();Pe();H=0,b={START_BOUNDARY:H++,HEADER_FIELD_START:H++,HEADER_FIELD:H++,HEADER_VALUE_START:H++,HEADER_VALUE:H++,HEADER_VALUE_ALMOST_DONE:H++,HEADERS_ALMOST_DONE:H++,PART_DATA_START:H++,PART_DATA:H++,END:H++},lt=1,X={PART_BOUNDARY:lt,LAST_BOUNDARY:lt*=2},Ce=10,fe=13,Sr=32,ye=45,dr=58,br=97,Ir=122,gr=t=>t|32,Z=()=>{},qe=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=Z,this.onHeaderField=Z,this.onHeadersEnd=Z,this.onHeaderValue=Z,this.onPartBegin=Z,this.onPartData=Z,this.onPartEnd=Z,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let r=0;r<a.length;r++)e[r]=a.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=b.START_BOUNDARY}write(a){let e=0,r=a.length,n=this.index,{lookbehind:o,boundary:p,boundaryChars:c,index:l,state:u,flags:g}=this,D=this.boundary.length,A=D-1,m=a.length,i,R,S=y=>{this[y+"Mark"]=e},d=y=>{delete this[y+"Mark"]},f=(y,P,I,Y)=>{(P===void 0||P!==I)&&this[y](Y&&Y.subarray(P,I))},M=(y,P)=>{let I=y+"Mark";I in this&&(P?(f(y,this[I],e,a),delete this[I]):(f(y,this[I],a.length,a),this[I]=0))};for(e=0;e<r;e++)switch(i=a[e],u){case b.START_BOUNDARY:if(l===p.length-2){if(i===ye)g|=X.LAST_BOUNDARY;else if(i!==fe)return;l++;break}else if(l-1===p.length-2){if(g&X.LAST_BOUNDARY&&i===ye)u=b.END,g=0;else if(!(g&X.LAST_BOUNDARY)&&i===Ce)l=0,f("onPartBegin"),u=b.HEADER_FIELD_START;else return;break}i!==p[l+2]&&(l=-2),i===p[l+2]&&l++;break;case b.HEADER_FIELD_START:u=b.HEADER_FIELD,S("onHeaderField"),l=0;case b.HEADER_FIELD:if(i===fe){d("onHeaderField"),u=b.HEADERS_ALMOST_DONE;break}if(l++,i===ye)break;if(i===dr){if(l===1)return;M("onHeaderField",!0),u=b.HEADER_VALUE_START;break}if(R=gr(i),R<br||R>Ir)return;break;case b.HEADER_VALUE_START:if(i===Sr)break;S("onHeaderValue"),u=b.HEADER_VALUE;case b.HEADER_VALUE:i===fe&&(M("onHeaderValue",!0),f("onHeaderEnd"),u=b.HEADER_VALUE_ALMOST_DONE);break;case b.HEADER_VALUE_ALMOST_DONE:if(i!==Ce)return;u=b.HEADER_FIELD_START;break;case b.HEADERS_ALMOST_DONE:if(i!==Ce)return;f("onHeadersEnd"),u=b.PART_DATA_START;break;case b.PART_DATA_START:u=b.PART_DATA,S("onPartData");case b.PART_DATA:if(n=l,l===0){for(e+=A;e<m&&!(a[e]in c);)e+=D;e-=A,i=a[e]}if(l<p.length)p[l]===i?(l===0&&M("onPartData",!0),l++):l=0;else if(l===p.length)l++,i===fe?g|=X.PART_BOUNDARY:i===ye?g|=X.LAST_BOUNDARY:l=0;else if(l-1===p.length)if(g&X.PART_BOUNDARY){if(l=0,i===Ce){g&=~X.PART_BOUNDARY,f("onPartEnd"),f("onPartBegin"),u=b.HEADER_FIELD_START;break}}else g&X.LAST_BOUNDARY&&i===ye?(f("onPartEnd"),u=b.END,g=0):l=0;if(l>0)o[l-1]=i;else if(n>0){let y=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);f("onPartData",0,n,y),n=0,S("onPartData"),e--}break;case b.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}M("onHeaderField"),M("onHeaderValue"),M("onPartData"),this.index=l,this.state=u,this.flags=g}end(){if(this.state===b.HEADER_FIELD_START&&this.index===0||this.state===b.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==b.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Vr={};ae(Vr,{default:()=>Lr});module.exports=ra(Vr);var x=require("@raycast/api"),$t=require("@raycast/utils");var E=require("@raycast/api"),He=V(require("react")),J=require("react/jsx-runtime");function na(t,a=100){return t.length>a?t.slice(0,a)+" ...":t}function Qe(t){let a=t.error,e=()=>{(0,E.launchCommand)({name:E.environment.commandName,type:E.LaunchType.UserInitiated})};return(0,J.jsx)(E.MenuBarExtra,{icon:t.icon,isLoading:t.isLoading,title:t.title,tooltip:t.tooltip,children:a?(0,J.jsx)(re,{title:`Error: ${a}`,icon:{source:E.Icon.Warning},onAction:e}):t.children})}function re(t){return(0,J.jsx)(E.MenuBarExtra.Item,{title:na(t.title),icon:t.icon,subtitle:t.subtitle,shortcut:t.shortcut,onAction:t.onAction,tooltip:t.tooltip})}function oa(t,a){if(!a)return{shown:t,hidden:0};if(He.default.isValidElement(t))return{shown:[t],hidden:0};let e=t;if(!e||e.length<=0)return{shown:void 0,hidden:0};let r=a||10,n=e.slice(0,r),o=e.length-n.length;return{shown:n,hidden:o}}function ia(t,a){if(!(!t||t.length<=0))return t.join(a)}function Oe(t){let a=ia([t.title,t.subtitle].filter(o=>o)," "),{shown:e,hidden:r}=oa(t.children,t.maxChildren),n=e===void 0||e.length<=0;return(0,J.jsxs)(E.MenuBarExtra.Section,{title:a,children:[e,r>0&&t.moreElement&&t.moreElement(r),n&&t.emptyElement&&t.emptyElement]})}function $e(){return(0,J.jsx)(E.MenuBarExtra.Item,{title:"Configure Command",shortcut:{modifiers:["cmd"],key:","},icon:E.Icon.Gear,onAction:()=>(0,E.openCommandPreferences)()})}function We(t){let a=t.min||1,e=t.max||100,r=t.default||10,o=(0,E.getPreferenceValues)()[t.name]||"",p=Number(o);return isNaN(p)||p<a||p>e?r:p}var T=require("@raycast/api"),z=require("react/jsx-runtime");var Ye=({sortQuery:t,setSortQuery:a,data:e})=>a?(0,z.jsxs)(T.MenuBarExtra.Submenu,{title:"Sort By",icon:T.Icon.ArrowUp,children:[e.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,z.jsx)(Ke,{title:r,value:n,sortQuery:t??"",setSortQuery:a},n||"relevance")),e.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,z.jsx)(T.MenuBarExtra.Section,{title:"Most Reactions",children:e.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,z.jsx)(Ke,{title:r,value:n,sortQuery:t??"",setSortQuery:a},n))})]}):(0,z.jsx)(z.Fragment,{}),Ke=({title:t,value:a,sortQuery:e,setSortQuery:r})=>(0,z.jsx)(T.MenuBarExtra.Item,{title:t,icon:e===a?{source:T.Icon.CheckCircle,tintColor:T.Color.Green}:T.Icon.Circle,onAction:()=>r(a)});var $=require("@raycast/api");var s=V(require("graphql-tag")),se=s.default`
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
`,sa=s.default`
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
  ${se}
`,G=s.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ue=s.default`
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
  ${G}
`,me=s.default`
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
  ${ue}
  ${se}
  ${G}
`,ua=s.default`
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
  ${ue}
  ${se}
  ${G}
`,pa=s.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Xe=s.default`
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
  ${ue}
  ${pa}
`,Je=s.default`
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
  ${se}
  ${ue}
  ${G}
`,la=s.default`
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
  ${se}
  ${ue}
  ${G}
`,ca=s.default`
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
`,Ze=s.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Le=s.default`
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
`,ya=s.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Sa=s.default`
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
`,da=s.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ba=s.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ia=s.default`
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
  ${sa}
`,ga=s.default`
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
`,Ma=s.default`
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
  ${G}
`,ma=s.default`
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
`,Ra=s.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ua}
`,Aa=s.default`
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
  ${me}
`,Pa=s.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${me}
`,Ea=s.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Ca=s.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,fa=s.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Da=s.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,xa=s.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Ua=s.default`
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
  ${me}
`,_a=s.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,va=s.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Xe}
`,ha=s.default`
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
  ${Je}
`,Ta=s.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${la}
`,wa=s.default`
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
  ${G}
`,Ba=s.default`
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
`,Oa=s.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${ca}
`,La=s.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Va=s.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Na=s.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,qa=s.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Fa=s.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ja=s.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ka=s.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,za=s.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ga=s.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Ha=s.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Qa=s.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,$a=s.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Wa=s.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ka=s.default`
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
`,Ya=s.default`
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
  ${Je}
`,Xa=s.default`
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
  ${Le}
`,Ja=s.default`
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
  ${Le}
`,Za=s.default`
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
`,er=s.default`
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
`,tr=s.default`
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
  ${Ze}
  ${G}
`,ar=s.default`
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
  ${Ze}
`,rr=s.default`
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
  ${me}
`,nr=s.default`
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
  ${ya}
`,or=s.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ir=s.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,sr=s.default`
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
  ${Le}
`,ur=s.default`
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
  ${G}
  ${Xe}
`,pr=s.default`
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
  ${G}
`,lr=s.default`
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
`,cr=(t,a,e,r)=>t();function et(t,a=cr){return{createLinkedBranch(e,r,n){return a(o=>t.request({document:Sa,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return a(o=>t.request({document:da,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return a(o=>t.request({document:ba,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return a(o=>t.request({document:Ia,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return a(o=>t.request({document:ga,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return a(o=>t.request({document:Ma,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return a(o=>t.request({document:ma,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return a(o=>t.request({document:Ra,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return a(o=>t.request({document:Aa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return a(o=>t.request({document:Pa,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return a(o=>t.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return a(o=>t.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return a(o=>t.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return a(o=>t.request({document:er,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return a(o=>t.request({document:or,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var tt=require("@raycast/api");function at(t){return t.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:$.Color.SecondaryText},text:"Closed as not planned",color:$.Color.Purple}:t.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:$.Color.Purple},text:"Closed as completed",color:$.Color.Purple}:t.closed?{icon:{source:"issue-closed.svg",tintColor:$.Color.Purple},text:"Closed",color:$.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:$.Color.Green},text:"Open",color:$.Color.Green}}var rt=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],nt="sort:updated-desc";var Lt=require("@raycast/utils");var _t=require("@octokit/rest"),vt=require("@raycast/api"),ht=require("@raycast/utils"),Tt=require("graphql-request");var xt=V(require("node:http"),1),Ut=V(require("node:https"),1),te=V(require("node:zlib"),1),L=V(require("node:stream"),1),be=require("node:buffer");var pe={};ae(pe,{default:()=>Re.default});U(pe,require("data-uri-to-buffer"));var Re=V(require("data-uri-to-buffer"));var N=V(require("node:stream"),1),K=require("node:util"),B=require("node:buffer");var le={};ae(le,{default:()=>Ae.default});U(le,require("fetch-blob"));var Ae=V(require("fetch-blob"));Pe();var W=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var v=class extends W{constructor(a,e,r){super(a,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ee=Symbol.toStringTag,Ve=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ee]==="URLSearchParams",ce=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ee]),it=t=>typeof t=="object"&&(t[Ee]==="AbortSignal"||t[Ee]==="EventTarget"),st=(t,a)=>{let e=new URL(a).hostname,r=new URL(t).hostname;return e===r||e.endsWith(`.${r}`)},ut=(t,a)=>{let e=new URL(a).protocol,r=new URL(t).protocol;return e===r};var Rr=(0,K.promisify)(N.default.pipeline),h=Symbol("Body internals"),Q=class{constructor(a,{size:e=0}={}){let r=null;a===null?a=null:Ve(a)?a=B.Buffer.from(a.toString()):ce(a)||B.Buffer.isBuffer(a)||(K.types.isAnyArrayBuffer(a)?a=B.Buffer.from(a):ArrayBuffer.isView(a)?a=B.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof N.default||(a instanceof _.FormData?(a=(0,_.formDataToBlob)(a),r=a.type.split("=")[1]):a=B.Buffer.from(String(a))));let n=a;B.Buffer.isBuffer(a)?n=N.default.Readable.from(a):ce(a)&&(n=N.default.Readable.from(a.stream())),this[h]={body:a,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,a instanceof N.default&&a.on("error",o=>{let p=o instanceof W?o:new v(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[h].error=p})}get body(){return this[h].stream}get bodyUsed(){return this[h].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:r}=await Fe(this);return a.slice(e,e+r)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let r=new _.FormData,n=new URLSearchParams(await this.text());for(let[o,p]of n)r.append(o,p);return r}let{toFormData:e}=await Promise.resolve().then(()=>(yt(),ct));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[h].body&&this[h].body.type||"",e=await this.arrayBuffer();return new Ae.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await Fe(this);return new TextDecoder().decode(a)}buffer(){return Fe(this)}};Q.prototype.buffer=(0,K.deprecate)(Q.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Q.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,K.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Fe(t){if(t[h].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[h].disturbed=!0,t[h].error)throw t[h].error;let{body:a}=t;if(a===null)return B.Buffer.alloc(0);if(!(a instanceof N.default))return B.Buffer.alloc(0);let e=[],r=0;try{for await(let n of a){if(t.size>0&&r+n.length>t.size){let o=new v(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof W?n:new v(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?B.Buffer.from(e.join("")):B.Buffer.concat(e,r)}catch(n){throw new v(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new v(`Premature close of server response while trying to fetch ${t.url}`)}var ne=(t,a)=>{let e,r,{body:n}=t[h];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof N.default&&typeof n.getBoundary!="function"&&(e=new N.PassThrough({highWaterMark:a}),r=new N.PassThrough({highWaterMark:a}),n.pipe(e),n.pipe(r),t[h].stream=e,n=r),n},Ar=(0,K.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),De=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Ve(t)?"application/x-www-form-urlencoded;charset=UTF-8":ce(t)?t.type||null:B.Buffer.isBuffer(t)||K.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof _.FormData?`multipart/form-data; boundary=${a[h].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${Ar(t)}`:t instanceof N.default?null:"text/plain;charset=UTF-8",St=t=>{let{body:a}=t[h];return a===null?0:ce(a)?a.size:B.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},dt=async(t,{body:a})=>{a===null?t.end():await Rr(a,t)};var je=require("node:util"),Se=V(require("node:http"),1),xe=typeof Se.default.validateHeaderName=="function"?Se.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},ke=typeof Se.default.validateHeaderValue=="function"?Se.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},O=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let r=a.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(p=>[n,p]))}else if(a!=null)if(typeof a=="object"&&!je.types.isBoxedPrimitive(a)){let r=a[Symbol.iterator];if(r==null)e.push(...Object.entries(a));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(n=>{if(typeof n!="object"||je.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(xe(r),ke(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(p,c)=>(xe(p),ke(p,String(c)),URLSearchParams.prototype[n].call(r,String(p).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return p=>(xe(p),URLSearchParams.prototype[n].call(r,String(p).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(a)&&(r=r.toLowerCase()),r}forEach(a,e=void 0){for(let r of this.keys())Reflect.apply(a,e,[this.get(r),r,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let r=this.getAll(e);return e==="host"?a[e]=r[0]:a[e]=r.length>1?r:r[0],a},{})}};Object.defineProperties(O.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function bt(t=[]){return new O(t.reduce((a,e,r,n)=>(r%2===0&&a.push(n.slice(r,r+2)),a),[]).filter(([a,e])=>{try{return xe(a),ke(a,String(e)),!0}catch{return!1}}))}var Pr=new Set([301,302,303,307,308]),Ue=t=>Pr.has(t);var j=Symbol("Response internals"),q=class t extends Q{constructor(a=null,e={}){super(a,e);let r=e.status!=null?e.status:200,n=new O(e.headers);if(a!==null&&!n.has("Content-Type")){let o=De(a,this);o&&n.append("Content-Type",o)}this[j]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[j].type}get url(){return this[j].url||""}get status(){return this[j].status}get ok(){return this[j].status>=200&&this[j].status<300}get redirected(){return this[j].counter>0}get statusText(){return this[j].statusText}get headers(){return this[j].headers}get highWaterMark(){return this[j].highWaterMark}clone(){return new t(ne(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!Ue(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[j].type="error",a}static json(a=void 0,e={}){let r=JSON.stringify(a);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new O(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(q.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ct=require("node:url"),ft=require("node:util");var It=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var Mt=require("node:net");function gt(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var mt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Rt="strict-origin-when-cross-origin";function At(t){if(!mt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function Er(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,Mt.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function oe(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:Er(t)}function Pt(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=gt(n),p=gt(n,!0);o.toString().length>4096&&(o=p),a&&(o=a(o)),e&&(p=e(p));let c=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return p;case"unsafe-url":return o;case"strict-origin":return oe(o)&&!oe(c)?"no-referrer":p.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:oe(o)&&!oe(c)?"no-referrer":p;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:p;case"no-referrer-when-downgrade":return oe(o)&&!oe(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Et(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of a)r&&mt.has(r)&&(e=r);return e}var C=Symbol("Request internals"),de=t=>typeof t=="object"&&typeof t[C]=="object",Cr=(0,ft.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ee=class t extends Q{constructor(a,e={}){let r;if(de(a)?r=new URL(a.url):(r=new URL(a),a={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!de(e)&&"data"in e&&Cr(),(e.body!=null||de(a)&&a.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:de(a)&&a.body!==null?ne(a):null;super(o,{size:e.size||a.size||0});let p=new O(e.headers||a.headers||{});if(o!==null&&!p.has("Content-Type")){let u=De(o,this);u&&p.set("Content-Type",u)}let c=de(a)?a.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!it(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let l=e.referrer==null?a.referrer:e.referrer;if(l==="")l="no-referrer";else if(l){let u=new URL(l);l=/^about:(\/\/)?client$/.test(u)?"client":u}else l=void 0;this[C]={method:n,redirect:e.redirect||a.redirect||"follow",headers:p,parsedURL:r,signal:c,referrer:l},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[C].method}get url(){return(0,Ct.format)(this[C].parsedURL)}get headers(){return this[C].headers}get redirect(){return this[C].redirect}get signal(){return this[C].signal}get referrer(){if(this[C].referrer==="no-referrer")return"";if(this[C].referrer==="client")return"about:client";if(this[C].referrer)return this[C].referrer.toString()}get referrerPolicy(){return this[C].referrerPolicy}set referrerPolicy(a){this[C].referrerPolicy=At(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ee.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Dt=t=>{let{parsedURL:a}=t[C],e=new O(t[C].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let c=St(t);typeof c=="number"&&!Number.isNaN(c)&&(r=String(c))}r&&e.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=Rt),t.referrer&&t.referrer!=="no-referrer"?t[C].referrer=Pt(t):t[C].referrer="no-referrer",t[C].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(a));let o=It(a),p={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:a,options:p}};var _e=class extends W{constructor(a,e="aborted"){super(a,e)}};Pe();Ne();var fr=new Set(["data:","http:","https:"]);async function ve(t,a){return new Promise((e,r)=>{let n=new ee(t,a),{parsedURL:o,options:p}=Dt(n);if(!fr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let i=(0,Re.default)(n.url),R=new q(i,{headers:{"Content-Type":i.typeFull}});e(R);return}let c=(o.protocol==="https:"?Ut.default:xt.default).request,{signal:l}=n,u=null,g=()=>{let i=new _e("The operation was aborted.");r(i),n.body&&n.body instanceof L.default.Readable&&n.body.destroy(i),!(!u||!u.body)&&u.body.emit("error",i)};if(l&&l.aborted){g();return}let D=()=>{g(),m()},A=c(o.toString(),p);l&&l.addEventListener("abort",D);let m=()=>{A.abort(),l&&l.removeEventListener("abort",D)};A.on("error",i=>{r(new v(`request to ${n.url} failed, reason: ${i.message}`,"system",i)),m()}),Dr(A,i=>{u&&u.body&&u.body.destroy(i)}),process.version<"v14"&&A.on("socket",i=>{let R;i.prependListener("end",()=>{R=i._eventsCount}),i.prependListener("close",S=>{if(u&&R<i._eventsCount&&!S){let d=new Error("Premature close");d.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",d)}})}),A.on("response",i=>{A.setTimeout(0);let R=bt(i.rawHeaders);if(Ue(i.statusCode)){let y=R.get("Location"),P=null;try{P=y===null?null:new URL(y,n.url)}catch{if(n.redirect!=="manual"){r(new v(`uri requested responds with an invalid redirect URL: ${y}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new v(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new v(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let I={headers:new O(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ne(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!st(n.url,P)||!ut(n.url,P))for(let ie of["authorization","www-authenticate","cookie","cookie2"])I.headers.delete(ie);if(i.statusCode!==303&&n.body&&a.body instanceof L.default.Readable){r(new v("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(i.statusCode===303||(i.statusCode===301||i.statusCode===302)&&n.method==="POST")&&(I.method="GET",I.body=void 0,I.headers.delete("content-length"));let Y=Et(R);Y&&(I.referrerPolicy=Y),e(ve(new ee(P,I))),m();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}l&&i.once("end",()=>{l.removeEventListener("abort",D)});let S=(0,L.pipeline)(i,new L.PassThrough,y=>{y&&r(y)});process.version<"v12.10"&&i.on("aborted",D);let d={url:n.url,status:i.statusCode,statusText:i.statusMessage,headers:R,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},f=R.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||f===null||i.statusCode===204||i.statusCode===304){u=new q(S,d),e(u);return}let M={flush:te.default.Z_SYNC_FLUSH,finishFlush:te.default.Z_SYNC_FLUSH};if(f==="gzip"||f==="x-gzip"){S=(0,L.pipeline)(S,te.default.createGunzip(M),y=>{y&&r(y)}),u=new q(S,d),e(u);return}if(f==="deflate"||f==="x-deflate"){let y=(0,L.pipeline)(i,new L.PassThrough,P=>{P&&r(P)});y.once("data",P=>{(P[0]&15)===8?S=(0,L.pipeline)(S,te.default.createInflate(),I=>{I&&r(I)}):S=(0,L.pipeline)(S,te.default.createInflateRaw(),I=>{I&&r(I)}),u=new q(S,d),e(u)}),y.once("end",()=>{u||(u=new q(S,d),e(u))});return}if(f==="br"){S=(0,L.pipeline)(S,te.default.createBrotliDecompress(),y=>{y&&r(y)}),u=new q(S,d),e(u);return}u=new q(S,d),e(u)}),dt(A,n).catch(r)})}function Dr(t,a){let e=be.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",p=>{let{headers:c}=p;r=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),t.on("socket",p=>{let c=()=>{if(r&&!n){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},l=u=>{n=be.Buffer.compare(u.slice(-5),e)===0,!n&&o&&(n=be.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&be.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};p.prependListener("close",c),p.on("data",l),t.on("close",()=>{p.removeListener("close",c),p.removeListener("data",l)})})}var ze=null,Ge=null,wt=null,xr=(0,vt.getPreferenceValues)();function Ur({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;wt=t,ze=et(new Tt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Ge=new _t.Octokit({auth:t,request:{fetch:ve}})}var Bt=ht.OAuthService.github({personalAccessToken:xr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Ur});function Ot(){if(!ze||!Ge)throw new Error("GitHub clients not initialized");return{github:ze,octokit:Ge,token:wt}}var Vt=(0,Lt.withAccessToken)(Bt);var zt=require("@raycast/utils"),Te=require("date-fns"),Gt=require("lodash");var Nt=require("@raycast/api"),_r=require("lodash");function qt(t,a,{suffix:e="s",withNumber:r=!1}={}){let n=`${a}${t!==1?e:""}`;return r?`${t} ${n}`:n}var he=require("node:child_process");var jt=require("node:util"),F=require("@raycast/api"),vr=require("@raycast/utils");var Co=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:F.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:F.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:F.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:F.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:F.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:F.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:F.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:F.Color.PrimaryText}}];var hr=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Tr=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],wr=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],fo=hr[0].value,Do=Tr[0].value,xo=wr[0].value;var Uo=(0,jt.promisify)(he.execFile);var Ie="\x1B",Ft="\x07",_o=new RegExp(`${Ie}][^${Ft}${Ie}]*(?:${Ft}|${Ie}\\\\)`,"g"),vo=new RegExp(`${Ie}\\[[0-9;?]*[A-Za-z]`,"g"),ho=new RegExp(`${Ie}\\([0-9A-Za-z]`,"g");function kt(t,a,e){if(e)return`repo:${e}`;let r=a.filter(Boolean);return t==="all"?"":t==="exclude"?r.map(n=>`-repo:${n}`).join(" "):r.map(n=>`repo:${n}`).join(" ")}function Ht({sortQuery:t,repository:a,showCreated:e,showAssigned:r,showMentioned:n,showRecentlyClosed:o,filterMode:p,repositoryList:c}){let{github:l}=Ot(),{data:u,...g}=(0,zt.useCachedPromise)(async(M,y,P,I,Y,ie,Wt,Kt)=>{let Yt=`updated:>${(0,Te.format)((0,Te.subDays)(Date.now(),60),"yyyy-MM-dd")}`,Xt=kt(Wt,Kt,M);return(await Promise.all([...P?["is:issue author:@me archived:false is:open"]:[],...ie?["is:issue author:@me archived:false is:closed"]:[],...I?["is:issue assignee:@me archived:false is:open"]:[],...I&&ie?["is:issue assignee:@me archived:false is:closed"]:[],...Y?["is:issue mentions:@me archived:false is:open"]:[],...Y&&ie?["is:issue mentions:@me archived:false is:closed"]:[]].map(we=>l.searchIssues({query:`${we} ${y} ${Yt} ${Xt}`,numberOfItems:20})))).map(we=>we.search.nodes)},[a,t,e,r,n,o,p,c]),D,A,m,i,R,S;if(u){let M=0;e&&(D=u[M++]),o&&(A=u[M++]),r&&(m=u[M++],o&&(i=u[M++])),n&&(R=u[M++],o&&(S=u[M++]))}let d=(0,Gt.uniqBy)([...A||[],...i||[],...S||[]],"id");return{data:[{title:"Created",issues:D},{title:"Assigned",issues:m},{title:"Mentioned",issues:R},{title:"Recently Closed",issues:d}].filter(M=>M.issues&&M.issues.length>0).map(M=>{let y=qt(M.issues?.length??0,"issue",{withNumber:!0});return{...M,subtitle:y}}),...g}}var k=require("react/jsx-runtime");async function Qt(){return(0,x.launchCommand)({name:"my-issues",type:x.LaunchType.UserInitiated})}function Br(){return We({name:"maxitems"})}function Or(){let[t,a]=(0,$t.useCachedState)("sort-query",nt,{cacheNamespace:"github-my-issue-menu"}),{showtext:e,showCreated:r,showAssigned:n,showMentioned:o,showRecentlyClosed:p,useUnreadIndicator:c,repositoryFilterMode:l,repositoryList:u}=(0,x.getPreferenceValues)(),{data:g,isLoading:D}=Ht({repository:null,sortQuery:t,showCreated:r,showAssigned:n,showMentioned:o,showRecentlyClosed:p,filterMode:l,repositoryList:u?.split(",").map(m=>m.trim())||[]}),A=g?.reduce((m,i)=>m+(i.issues??[]).length,0);return(0,k.jsxs)(Qe,{title:e?`${A}`:void 0,icon:{source:`issue-open${c&&A>0?"-unread":""}.svg`,tintColor:x.Color.PrimaryText},isLoading:D,children:[g?.map(m=>(0,k.jsx)(Oe,{title:m.title,maxChildren:Br(),moreElement:i=>(0,k.jsx)(re,{title:`... ${i} more`,onAction:()=>Qt()}),emptyElement:(0,k.jsx)(re,{title:"No Issues"}),children:m.issues?.map(i=>{let R=at(i);return(0,k.jsx)(re,{title:`#${i.number} ${i.title}`,icon:{source:R.icon.source,tintColor:x.Color.PrimaryText},onAction:()=>(0,x.open)(i.url)},i.id)})},m.title)),(0,k.jsxs)(Oe,{children:[(0,k.jsx)(re,{title:"Open My Issues",icon:x.Icon.AppWindowList,shortcut:x.Keyboard.Shortcut.Common.Open,onAction:()=>Qt()}),(0,k.jsx)(Ye,{sortQuery:t,setSortQuery:a,data:rt}),(0,k.jsx)($e,{})]})]})}var Lr=Vt(Or);
