"use strict";var $t=Object.create;var be=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Yt=Object.getPrototypeOf,Xt=Object.prototype.hasOwnProperty;var he=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(n){throw e=[n],n}};var ee=(t,a)=>{for(var e in a)be(t,e,{get:a[e],enumerable:!0})},de=(t,a,e,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Kt(a))!Xt.call(t,r)&&r!==e&&be(t,r,{get:()=>a[r],enumerable:!(n=Wt(a,r))||n.enumerable});return t},x=(t,a,e)=>(de(t,a,"default"),e&&de(e,a,"default")),L=(t,a,e)=>(e=t!=null?$t(Yt(t)):{},de(a||!t||!t.__esModule?be(e,"default",{value:t,enumerable:!0}):e,t)),Jt=t=>de(be({},"__esModule",{value:!0}),t);var U={};ee(U,{default:()=>st.default});var st,Re=he(()=>{x(U,require("formdata-polyfill/esm.min.js"));st=L(require("formdata-polyfill/esm.min.js"))});var T={};ee(T,{default:()=>yt.default});var yt,qe=he(()=>{x(T,require("fetch-blob/from.js"));yt=L(require("fetch-blob/from.js"))});var dt={};ee(dt,{toFormData:()=>br});function dr(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",n=e.slice(e.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function br(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Fe(e[1]||e[2]),r,o,p,c,s,u,g=[],h=new U.FormData,D=y=>{p+=S.decode(y,{stream:!0})},f=y=>{g.push(y)},l=()=>{let y=new T.File(g,u,{type:s});h.append(c,y)},R=()=>{h.append(c,p)},S=new TextDecoder("utf-8");S.decode(),n.onPartBegin=function(){n.onPartData=D,n.onPartEnd=R,r="",o="",p="",c="",s="",u=null,g.length=0},n.onHeaderField=function(y){r+=S.decode(y,{stream:!0})},n.onHeaderValue=function(y){o+=S.decode(y,{stream:!0})},n.onHeaderEnd=function(){if(o+=S.decode(),r=r.toLowerCase(),r==="content-disposition"){let y=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);y&&(c=y[2]||y[3]||""),u=dr(o),u&&(n.onPartData=f,n.onPartEnd=l)}else r==="content-type"&&(s=o);o="",r=""};for await(let y of t)n.write(y);return n.end(),h}var k,b,St,W,Pe,Ee,pr,le,lr,cr,yr,Sr,X,Fe,bt=he(()=>{qe();Re();k=0,b={START_BOUNDARY:k++,HEADER_FIELD_START:k++,HEADER_FIELD:k++,HEADER_VALUE_START:k++,HEADER_VALUE:k++,HEADER_VALUE_ALMOST_DONE:k++,HEADERS_ALMOST_DONE:k++,PART_DATA_START:k++,PART_DATA:k++,END:k++},St=1,W={PART_BOUNDARY:St,LAST_BOUNDARY:St*=2},Pe=10,Ee=13,pr=32,le=45,lr=58,cr=97,yr=122,Sr=t=>t|32,X=()=>{},Fe=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=X,this.onHeaderField=X,this.onHeadersEnd=X,this.onHeaderValue=X,this.onPartBegin=X,this.onPartData=X,this.onPartEnd=X,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let n=0;n<a.length;n++)e[n]=a.charCodeAt(n),this.boundaryChars[e[n]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=b.START_BOUNDARY}write(a){let e=0,n=a.length,r=this.index,{lookbehind:o,boundary:p,boundaryChars:c,index:s,state:u,flags:g}=this,h=this.boundary.length,D=h-1,f=a.length,l,R,S=d=>{this[d+"Mark"]=e},y=d=>{delete this[d+"Mark"]},m=(d,C,M,ne)=>{(C===void 0||C!==M)&&this[d](ne&&ne.subarray(C,M))},$=(d,C)=>{let M=d+"Mark";M in this&&(C?(m(d,this[M],e,a),delete this[M]):(m(d,this[M],a.length,a),this[M]=0))};for(e=0;e<n;e++)switch(l=a[e],u){case b.START_BOUNDARY:if(s===p.length-2){if(l===le)g|=W.LAST_BOUNDARY;else if(l!==Ee)return;s++;break}else if(s-1===p.length-2){if(g&W.LAST_BOUNDARY&&l===le)u=b.END,g=0;else if(!(g&W.LAST_BOUNDARY)&&l===Pe)s=0,m("onPartBegin"),u=b.HEADER_FIELD_START;else return;break}l!==p[s+2]&&(s=-2),l===p[s+2]&&s++;break;case b.HEADER_FIELD_START:u=b.HEADER_FIELD,S("onHeaderField"),s=0;case b.HEADER_FIELD:if(l===Ee){y("onHeaderField"),u=b.HEADERS_ALMOST_DONE;break}if(s++,l===le)break;if(l===lr){if(s===1)return;$("onHeaderField",!0),u=b.HEADER_VALUE_START;break}if(R=Sr(l),R<cr||R>yr)return;break;case b.HEADER_VALUE_START:if(l===pr)break;S("onHeaderValue"),u=b.HEADER_VALUE;case b.HEADER_VALUE:l===Ee&&($("onHeaderValue",!0),m("onHeaderEnd"),u=b.HEADER_VALUE_ALMOST_DONE);break;case b.HEADER_VALUE_ALMOST_DONE:if(l!==Pe)return;u=b.HEADER_FIELD_START;break;case b.HEADERS_ALMOST_DONE:if(l!==Pe)return;m("onHeadersEnd"),u=b.PART_DATA_START;break;case b.PART_DATA_START:u=b.PART_DATA,S("onPartData");case b.PART_DATA:if(r=s,s===0){for(e+=D;e<f&&!(a[e]in c);)e+=h;e-=D,l=a[e]}if(s<p.length)p[s]===l?(s===0&&$("onPartData",!0),s++):s=0;else if(s===p.length)s++,l===Ee?g|=W.PART_BOUNDARY:l===le?g|=W.LAST_BOUNDARY:s=0;else if(s-1===p.length)if(g&W.PART_BOUNDARY){if(s=0,l===Pe){g&=~W.PART_BOUNDARY,m("onPartEnd"),m("onPartBegin"),u=b.HEADER_FIELD_START;break}}else g&W.LAST_BOUNDARY&&l===le?(m("onPartEnd"),u=b.END,g=0):s=0;if(s>0)o[s-1]=l;else if(r>0){let d=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);m("onPartData",0,r,d),r=0,S("onPartData"),e--}break;case b.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}$("onHeaderField"),$("onHeaderValue"),$("onPartData"),this.index=s,this.state=u,this.flags=g}end(){if(this.state===b.HEADER_FIELD_START&&this.index===0||this.state===b.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==b.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Br={};ee(Br,{default:()=>wr});module.exports=Jt(Br);var I=require("@raycast/api");var A=require("@raycast/api"),Qe=L(require("react")),K=require("react/jsx-runtime");function Te(t,a=100){return t.length>a?t.slice(0,a)+" ...":t}function $e(t){let a=t.error,e=()=>{(0,A.launchCommand)({name:A.environment.commandName,type:A.LaunchType.UserInitiated})};return(0,K.jsx)(A.MenuBarExtra,{icon:t.icon,isLoading:t.isLoading,title:t.title,tooltip:t.tooltip,children:a?(0,K.jsx)(G,{title:`Error: ${a}`,icon:{source:A.Icon.Warning},onAction:e}):t.children})}function G(t){return(0,K.jsx)(A.MenuBarExtra.Item,{title:Te(t.title),icon:t.icon,subtitle:t.subtitle,shortcut:t.shortcut,onAction:t.onAction,tooltip:t.tooltip})}function Zt(t,a){if(!a)return{shown:t,hidden:0};if(Qe.default.isValidElement(t))return{shown:[t],hidden:0};let e=t;if(!e||e.length<=0)return{shown:void 0,hidden:0};let n=a||10,r=e.slice(0,n),o=e.length-r.length;return{shown:r,hidden:o}}function ea(t,a){if(!(!t||t.length<=0))return t.join(a)}function Y(t){let a=ea([t.title,t.subtitle].filter(o=>o)," "),{shown:e,hidden:n}=Zt(t.children,t.maxChildren),r=e===void 0||e.length<=0;return(0,K.jsxs)(A.MenuBarExtra.Section,{title:a,children:[e,n>0&&t.moreElement&&t.moreElement(n),r&&t.emptyElement&&t.emptyElement]})}function We(){return(0,K.jsx)(A.MenuBarExtra.Item,{title:"Configure Command",shortcut:{modifiers:["cmd"],key:","},icon:A.Icon.Gear,onAction:()=>(0,A.openCommandPreferences)()})}function Ke(t){let a=t.min||1,e=t.max||100,n=t.default||10,o=(0,A.getPreferenceValues)()[t.name]||"",p=Number(o);return isNaN(p)||p<a||p>e?n:p}var tt=require("@raycast/api"),ir=require("lodash");var i=L(require("graphql-tag")),oe=i.default`
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
`,ta=i.default`
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
  ${oe}
`,F=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ie=i.default`
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
  ${F}
`,Ie=i.default`
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
  ${ie}
  ${oe}
  ${F}
`,aa=i.default`
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
  ${ie}
  ${oe}
  ${F}
`,ra=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Ye=i.default`
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
  ${ie}
  ${ra}
`,Xe=i.default`
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
  ${oe}
  ${ie}
  ${F}
`,na=i.default`
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
  ${oe}
  ${ie}
  ${F}
`,oa=i.default`
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
`,Je=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,we=i.default`
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
`,ia=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,ua=i.default`
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
`,sa=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,pa=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,la=i.default`
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
  ${ta}
`,ca=i.default`
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
`,ya=i.default`
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
  ${F}
`,Sa=i.default`
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
`,da=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${aa}
`,ba=i.default`
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
  ${Ie}
`,Ia=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ie}
`,Ma=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,ga=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,ma=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ra=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Aa=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Pa=i.default`
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
  ${Ie}
`,Ea=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Ca=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Ye}
`,fa=i.default`
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
  ${Xe}
`,Da=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${na}
`,xa=i.default`
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
  ${F}
`,Ua=i.default`
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
`,_a=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${oa}
`,va=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ha=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ta=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,wa=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Ba=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Oa=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,La=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Va=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Na=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,qa=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Fa=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,ja=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,ka=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,za=i.default`
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
`,Ga=i.default`
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
  ${Xe}
`,Ha=i.default`
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
  ${we}
`,Qa=i.default`
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
  ${we}
`,$a=i.default`
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
`,Wa=i.default`
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
`,Ka=i.default`
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
  ${Je}
  ${F}
`,Ya=i.default`
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
  ${Je}
`,Xa=i.default`
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
  ${Ie}
`,Ja=i.default`
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
  ${ia}
`,Za=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,er=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,tr=i.default`
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
  ${we}
`,ar=i.default`
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
  ${F}
  ${Ye}
`,rr=i.default`
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
  ${F}
`,nr=i.default`
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
`,or=(t,a,e,n)=>t();function Ze(t,a=or){return{createLinkedBranch(e,n,r){return a(o=>t.request({document:ua,variables:e,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",e)},createRef(e,n,r){return a(o=>t.request({document:sa,variables:e,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",e)},deleteLinkedBranch(e,n,r){return a(o=>t.request({document:pa,variables:e,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,n,r){return a(o=>t.request({document:la,variables:e,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,n,r){return a(o=>t.request({document:ca,variables:e,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,n,r){return a(o=>t.request({document:ya,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,n,r){return a(o=>t.request({document:Sa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",e)},issueDetails(e,n,r){return a(o=>t.request({document:da,variables:e,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",e)},searchIssues(e,n,r){return a(o=>t.request({document:ba,variables:e,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",e)},issueByNumber(e,n,r){return a(o=>t.request({document:Ia,variables:e,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",e)},closeIssue(e,n,r){return a(o=>t.request({document:Ma,variables:e,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",e)},reopenIssue(e,n,r){return a(o=>t.request({document:ga,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",e)},changeIssueAssignees(e,n,r){return a(o=>t.request({document:ma,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,n,r){return a(o=>t.request({document:Ra,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,n,r){return a(o=>t.request({document:Aa,variables:e,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",e)},createIssue(e,n,r){return a(o=>t.request({document:Pa,variables:e,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",e)},changeProjectStatus(e,n,r){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",e)},projectDetails(e,n,r){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",e)},searchPullRequests(e,n,r){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",e)},pullRequestDetails(e,n,r){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,n,r){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,n,r){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,n,r){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",e)},closePullRequest(e,n,r){return a(o=>t.request({document:va,variables:e,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",e)},reopenPullRequest(e,n,r){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,n,r){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,n,r){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,n,r){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,n,r){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,n,r){return a(o=>t.request({document:La,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",e)},requestReview(e,n,r){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",e)},mergePullRequest(e,n,r){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,n,r){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,n,r){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,n,r){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,n,r){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,n,r){return a(o=>t.request({document:za,variables:e,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",e)},initPullRequest(e,n,r){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",e)},searchRepositories(e,n,r){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",e)},myLatestRepositories(e,n,r){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",e)},milestonesForRepository(e,n,r){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",e)},commentsForPullRequest(e,n,r){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",e)},dataForRepository(e,n,r){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",e)},searchRepositoryBranches(e,n,r){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",e)},repositoryIssues(e,n,r){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",e)},repositoryReleases(e,n,r){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",e)},addStar(e,n,r){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",e)},removeStar(e,n,r){return a(o=>t.request({document:er,variables:e,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",e)},myStarredRepositories(e,n,r){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",e)},getViewer(e,n,r){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewer","query",e)},getViewerStats(e,n,r){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",e)},getViewerStatsDetails(e,n,r){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",e)}}}var et=require("@raycast/api");function Be(t,a,{suffix:e="s",withNumber:n=!1}={}){let r=`${a}${t!==1?e:""}`;return n?`${t} ${r}`:r}var j=require("@raycast/api"),Me=["container","npm","maven","docker","nuget","rubygems"],Oe=100,at=5,ur={container:"Container",npm:"npm",maven:"Maven",docker:"Docker",nuget:"NuGet",rubygems:"RubyGems"},sr={container:j.Color.Blue,npm:j.Color.Red,maven:j.Color.Orange,docker:j.Color.SecondaryText,nuget:j.Color.Purple,rubygems:j.Color.Magenta};function Le(t){return ur[t]??t}function rt(t){return{source:j.Icon.Box,tintColor:sr[t]??j.Color.PrimaryText}}function nt(t){return typeof t.version_count=="number"?t.version_count:void 0}function ot(t){return[...t].sort((a,e)=>new Date(e.updated_at).getTime()-new Date(a.updated_at).getTime())}function Ve(t){return Me.flatMap(a=>{let e=t.filter(n=>n.package_type===a);return e.length===0?[]:[{packageType:a,title:Le(a),packages:e}]})}function it(t,a){let e=a.trim().toLowerCase();if(e.length===0)return;let n=e.includes("/")?t.filter(r=>r.repository?.full_name?.toLowerCase()===e):t.filter(r=>r.name.toLowerCase()===e);return Ve(n)[0]?.packages[0]}function ut(t){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t)}var qt=require("@raycast/utils");var Tt=require("@octokit/rest"),wt=require("@raycast/api"),Bt=require("@raycast/utils"),Ot=require("graphql-request");var vt=L(require("node:http"),1),ht=L(require("node:https"),1),Z=L(require("node:zlib"),1),O=L(require("node:stream"),1),Se=require("node:buffer");var ue={};ee(ue,{default:()=>ge.default});x(ue,require("data-uri-to-buffer"));var ge=L(require("data-uri-to-buffer"));var V=L(require("node:stream"),1),Q=require("node:util"),w=require("node:buffer");var se={};ee(se,{default:()=>me.default});x(se,require("fetch-blob"));var me=L(require("fetch-blob"));Re();var H=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var _=class extends H{constructor(a,e,n){super(a,e),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Ae=Symbol.toStringTag,Ne=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ae]==="URLSearchParams",pe=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ae]),pt=t=>typeof t=="object"&&(t[Ae]==="AbortSignal"||t[Ae]==="EventTarget"),lt=(t,a)=>{let e=new URL(a).hostname,n=new URL(t).hostname;return e===n||e.endsWith(`.${n}`)},ct=(t,a)=>{let e=new URL(a).protocol,n=new URL(t).protocol;return e===n};var Ir=(0,Q.promisify)(V.default.pipeline),v=Symbol("Body internals"),z=class{constructor(a,{size:e=0}={}){let n=null;a===null?a=null:Ne(a)?a=w.Buffer.from(a.toString()):pe(a)||w.Buffer.isBuffer(a)||(Q.types.isAnyArrayBuffer(a)?a=w.Buffer.from(a):ArrayBuffer.isView(a)?a=w.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof V.default||(a instanceof U.FormData?(a=(0,U.formDataToBlob)(a),n=a.type.split("=")[1]):a=w.Buffer.from(String(a))));let r=a;w.Buffer.isBuffer(a)?r=V.default.Readable.from(a):pe(a)&&(r=V.default.Readable.from(a.stream())),this[v]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=e,a instanceof V.default&&a.on("error",o=>{let p=o instanceof H?o:new _(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[v].error=p})}get body(){return this[v].stream}get bodyUsed(){return this[v].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:n}=await je(this);return a.slice(e,e+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new U.FormData,r=new URLSearchParams(await this.text());for(let[o,p]of r)n.append(o,p);return n}let{toFormData:e}=await Promise.resolve().then(()=>(bt(),dt));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[v].body&&this[v].body.type||"",e=await this.arrayBuffer();return new me.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await je(this);return new TextDecoder().decode(a)}buffer(){return je(this)}};z.prototype.buffer=(0,Q.deprecate)(z.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(z.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Q.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function je(t){if(t[v].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[v].disturbed=!0,t[v].error)throw t[v].error;let{body:a}=t;if(a===null)return w.Buffer.alloc(0);if(!(a instanceof V.default))return w.Buffer.alloc(0);let e=[],n=0;try{for await(let r of a){if(t.size>0&&n+r.length>t.size){let o=new _(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}n+=r.length,e.push(r)}}catch(r){throw r instanceof H?r:new _(`Invalid response body while trying to fetch ${t.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(r=>typeof r=="string")?w.Buffer.from(e.join("")):w.Buffer.concat(e,n)}catch(r){throw new _(`Could not create Buffer from response body for ${t.url}: ${r.message}`,"system",r)}else throw new _(`Premature close of server response while trying to fetch ${t.url}`)}var te=(t,a)=>{let e,n,{body:r}=t[v];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof V.default&&typeof r.getBoundary!="function"&&(e=new V.PassThrough({highWaterMark:a}),n=new V.PassThrough({highWaterMark:a}),r.pipe(e),r.pipe(n),t[v].stream=e,r=n),r},Mr=(0,Q.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ce=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Ne(t)?"application/x-www-form-urlencoded;charset=UTF-8":pe(t)?t.type||null:w.Buffer.isBuffer(t)||Q.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof U.FormData?`multipart/form-data; boundary=${a[v].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${Mr(t)}`:t instanceof V.default?null:"text/plain;charset=UTF-8",It=t=>{let{body:a}=t[v];return a===null?0:pe(a)?a.size:w.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},Mt=async(t,{body:a})=>{a===null?t.end():await Ir(a,t)};var ke=require("node:util"),ce=L(require("node:http"),1),fe=typeof ce.default.validateHeaderName=="function"?ce.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},ze=typeof ce.default.validateHeaderValue=="function"?ce.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},B=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let n=a.raw();for(let[r,o]of Object.entries(n))e.push(...o.map(p=>[r,p]))}else if(a!=null)if(typeof a=="object"&&!ke.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)e.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(r=>{if(typeof r!="object"||ke.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([n,r])=>(fe(n),ze(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(e),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(p,c)=>(fe(p),ze(p,String(c)),URLSearchParams.prototype[r].call(n,String(p).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return p=>(fe(p),URLSearchParams.prototype[r].call(n,String(p).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let n=e.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,e=void 0){for(let n of this.keys())Reflect.apply(a,e,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let n=this.getAll(e);return e==="host"?a[e]=n[0]:a[e]=n.length>1?n:n[0],a},{})}};Object.defineProperties(B.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function gt(t=[]){return new B(t.reduce((a,e,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,e])=>{try{return fe(a),ze(a,String(e)),!0}catch{return!1}}))}var gr=new Set([301,302,303,307,308]),De=t=>gr.has(t);var q=Symbol("Response internals"),N=class t extends z{constructor(a=null,e={}){super(a,e);let n=e.status!=null?e.status:200,r=new B(e.headers);if(a!==null&&!r.has("Content-Type")){let o=Ce(a,this);o&&r.append("Content-Type",o)}this[q]={type:"default",url:e.url,status:n,statusText:e.statusText||"",headers:r,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[q].type}get url(){return this[q].url||""}get status(){return this[q].status}get ok(){return this[q].status>=200&&this[q].status<300}get redirected(){return this[q].counter>0}get statusText(){return this[q].statusText}get headers(){return this[q].headers}get highWaterMark(){return this[q].highWaterMark}clone(){return new t(te(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!De(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[q].type="error",a}static json(a=void 0,e={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new B(e&&e.headers);return r.has("content-type")||r.set("content-type","application/json"),new t(n,{...e,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(N.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var xt=require("node:url"),Ut=require("node:util");var mt=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var At=require("node:net");function Rt(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var Pt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Et="strict-origin-when-cross-origin";function Ct(t){if(!Pt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function mr(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,At.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function ae(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:mr(t)}function ft(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let n=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let r=t.referrer,o=Rt(r),p=Rt(r,!0);o.toString().length>4096&&(o=p),a&&(o=a(o)),e&&(p=e(p));let c=new URL(t.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return p;case"unsafe-url":return o;case"strict-origin":return ae(o)&&!ae(c)?"no-referrer":p.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:ae(o)&&!ae(c)?"no-referrer":p;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:p;case"no-referrer-when-downgrade":return ae(o)&&!ae(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function Dt(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let n of a)n&&Pt.has(n)&&(e=n);return e}var P=Symbol("Request internals"),ye=t=>typeof t=="object"&&typeof t[P]=="object",Rr=(0,Ut.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),J=class t extends z{constructor(a,e={}){let n;if(ye(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!ye(e)&&"data"in e&&Rr(),(e.body!=null||ye(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ye(a)&&a.body!==null?te(a):null;super(o,{size:e.size||a.size||0});let p=new B(e.headers||a.headers||{});if(o!==null&&!p.has("Content-Type")){let u=Ce(o,this);u&&p.set("Content-Type",u)}let c=ye(a)?a.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!pt(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=e.referrer==null?a.referrer:e.referrer;if(s==="")s="no-referrer";else if(s){let u=new URL(s);s=/^about:(\/\/)?client$/.test(u)?"client":u}else s=void 0;this[P]={method:r,redirect:e.redirect||a.redirect||"follow",headers:p,parsedURL:n,signal:c,referrer:s},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[P].method}get url(){return(0,xt.format)(this[P].parsedURL)}get headers(){return this[P].headers}get redirect(){return this[P].redirect}get signal(){return this[P].signal}get referrer(){if(this[P].referrer==="no-referrer")return"";if(this[P].referrer==="client")return"about:client";if(this[P].referrer)return this[P].referrer.toString()}get referrerPolicy(){return this[P].referrerPolicy}set referrerPolicy(a){this[P].referrerPolicy=Ct(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(J.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var _t=t=>{let{parsedURL:a}=t[P],e=new B(t[P].headers);e.has("Accept")||e.set("Accept","*/*");let n=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(n="0"),t.body!==null){let c=It(t);typeof c=="number"&&!Number.isNaN(c)&&(n=String(c))}n&&e.set("Content-Length",n),t.referrerPolicy===""&&(t.referrerPolicy=Et),t.referrer&&t.referrer!=="no-referrer"?t[P].referrer=ft(t):t[P].referrer="no-referrer",t[P].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=t;typeof r=="function"&&(r=r(a));let o=mt(a),p={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:r};return{parsedURL:a,options:p}};var xe=class extends H{constructor(a,e="aborted"){super(a,e)}};Re();qe();var Ar=new Set(["data:","http:","https:"]);async function Ue(t,a){return new Promise((e,n)=>{let r=new J(t,a),{parsedURL:o,options:p}=_t(r);if(!Ar.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,ge.default)(r.url),R=new N(l,{headers:{"Content-Type":l.typeFull}});e(R);return}let c=(o.protocol==="https:"?ht.default:vt.default).request,{signal:s}=r,u=null,g=()=>{let l=new xe("The operation was aborted.");n(l),r.body&&r.body instanceof O.default.Readable&&r.body.destroy(l),!(!u||!u.body)&&u.body.emit("error",l)};if(s&&s.aborted){g();return}let h=()=>{g(),f()},D=c(o.toString(),p);s&&s.addEventListener("abort",h);let f=()=>{D.abort(),s&&s.removeEventListener("abort",h)};D.on("error",l=>{n(new _(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),f()}),Pr(D,l=>{u&&u.body&&u.body.destroy(l)}),process.version<"v14"&&D.on("socket",l=>{let R;l.prependListener("end",()=>{R=l._eventsCount}),l.prependListener("close",S=>{if(u&&R<l._eventsCount&&!S){let y=new Error("Premature close");y.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",y)}})}),D.on("response",l=>{D.setTimeout(0);let R=gt(l.rawHeaders);if(De(l.statusCode)){let d=R.get("Location"),C=null;try{C=d===null?null:new URL(d,r.url)}catch{if(r.redirect!=="manual"){n(new _(`uri requested responds with an invalid redirect URL: ${d}`,"invalid-redirect")),f();return}}switch(r.redirect){case"error":n(new _(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),f();return;case"manual":break;case"follow":{if(C===null)break;if(r.counter>=r.follow){n(new _(`maximum redirect reached at: ${r.url}`,"max-redirect")),f();return}let M={headers:new B(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:te(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!lt(r.url,C)||!ct(r.url,C))for(let Qt of["authorization","www-authenticate","cookie","cookie2"])M.headers.delete(Qt);if(l.statusCode!==303&&r.body&&a.body instanceof O.default.Readable){n(new _("Cannot follow redirect with body being a readable stream","unsupported-redirect")),f();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(M.method="GET",M.body=void 0,M.headers.delete("content-length"));let ne=Dt(R);ne&&(M.referrerPolicy=ne),e(Ue(new J(C,M))),f();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",h)});let S=(0,O.pipeline)(l,new O.PassThrough,d=>{d&&n(d)});process.version<"v12.10"&&l.on("aborted",h);let y={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:R,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},m=R.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||m===null||l.statusCode===204||l.statusCode===304){u=new N(S,y),e(u);return}let $={flush:Z.default.Z_SYNC_FLUSH,finishFlush:Z.default.Z_SYNC_FLUSH};if(m==="gzip"||m==="x-gzip"){S=(0,O.pipeline)(S,Z.default.createGunzip($),d=>{d&&n(d)}),u=new N(S,y),e(u);return}if(m==="deflate"||m==="x-deflate"){let d=(0,O.pipeline)(l,new O.PassThrough,C=>{C&&n(C)});d.once("data",C=>{(C[0]&15)===8?S=(0,O.pipeline)(S,Z.default.createInflate(),M=>{M&&n(M)}):S=(0,O.pipeline)(S,Z.default.createInflateRaw(),M=>{M&&n(M)}),u=new N(S,y),e(u)}),d.once("end",()=>{u||(u=new N(S,y),e(u))});return}if(m==="br"){S=(0,O.pipeline)(S,Z.default.createBrotliDecompress(),d=>{d&&n(d)}),u=new N(S,y),e(u);return}u=new N(S,y),e(u)}),Mt(D,r).catch(n)})}function Pr(t,a){let e=Se.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;t.on("response",p=>{let{headers:c}=p;n=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),t.on("socket",p=>{let c=()=>{if(n&&!r){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},s=u=>{r=Se.Buffer.compare(u.slice(-5),e)===0,!r&&o&&(r=Se.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&Se.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};p.prependListener("close",c),p.on("data",s),t.on("close",()=>{p.removeListener("close",c),p.removeListener("data",s)})})}var Ge=null,He=null,Lt=null,Er=(0,wt.getPreferenceValues)();function Cr({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;Lt=t,Ge=Ze(new Ot.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),He=new Tt.Octokit({auth:t,request:{fetch:Ue}})}var Vt=Bt.OAuthService.github({personalAccessToken:Er.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Cr});function Nt(){if(!Ge||!He)throw new Error("GitHub clients not initialized");return{github:Ge,octokit:He,token:Lt}}var Ft=(0,qt.withAccessToken)(Vt);var jt=require("@raycast/utils");var _e="read:packages",re=class extends Error{constructor(){super(`Your GitHub token is missing the "${_e}" scope.`),this.name="MissingPackagesScopeError"}};function fr(t){let a=t;return a?.response?.data?.message??a?.message??""}function Dr(t){return t?.status!==403?!1:fr(t).toLowerCase().includes(_e)}async function xr(t,a){let e=[];for(let n=1;n<=at;n++){let{data:r}=await t.request("GET /user/packages",{package_type:a,per_page:Oe,page:n});if(e.push(...r),r.length<Oe)break}return e}function kt(){let{octokit:t}=Nt();return(0,jt.useCachedPromise)(async()=>{let a=await Promise.allSettled(Me.map(r=>xr(t,r)));if(a.every(r=>r.status==="rejected")){let r=a;throw r.some(o=>Dr(o.reason))?new re:r[0].reason}let e=a.flatMap(r=>r.status==="fulfilled"?r.value:[]),n=Me.filter((r,o)=>a[o].status==="rejected");return{packages:ot(e),failedTypes:n}},[],{keepPreviousData:!0})}var Gt=require("@raycast/utils");var Ur="Total downloads",_r=/<h3[^>]*title="([\d,]+)"/;async function zt(t){let a=new AbortController,e=setTimeout(()=>a.abort(),1e4);try{let n=await fetch(t,{headers:{accept:"text/html"},signal:a.signal});if(!n.ok)return;let r=await n.text(),o=r.indexOf(Ur);if(o===-1)return;let p=_r.exec(r.slice(o,o+500));if(!p)return;let c=Number(p[1].replace(/,/g,""));return Number.isFinite(c)?c:void 0}catch{return}finally{clearTimeout(e)}}function Ht(t){return(0,Gt.useCachedPromise)(a=>zt(a),[t?.html_url??""],{execute:t!==void 0})}var E=require("react/jsx-runtime");async function ve(){return(0,I.launchCommand)({name:"my-packages",type:I.LaunchType.UserInitiated})}var vr=30;function hr(){return Ke({name:"maxitems"})}function Tr(){let{showtext:t,titlePackage:a}=(0,I.getPreferenceValues)(),{data:e,isLoading:n,error:r}=kt(),o=e?.packages??[],p=e?.failedTypes??[],c=Ve(o),s=a?it(o,a):void 0,{data:u,isLoading:g}=Ht(s),h=s?[Te(s.name,vr),u===void 0?void 0:ut(u)].filter(Boolean).join(" \xB7 "):t?`${o.length}`:void 0,D=s?u===void 0?s.name:`${s.name} \u2014 ${u.toLocaleString()} ${Be(u,"download")}`:"My Packages",f=r?r instanceof re?`Missing "${_e}" scope \u2014 re-authenticate in the extension preferences`:r.message:void 0,R=r instanceof re||o.length===0?f:void 0;return(0,E.jsxs)($e,{title:h,icon:{source:I.Icon.Box,tintColor:I.Color.PrimaryText},tooltip:D,isLoading:n||g,error:R,children:[c.map(S=>(0,E.jsx)(Y,{title:S.title,subtitle:`${S.packages.length}`,maxChildren:hr(),moreElement:y=>(0,E.jsx)(G,{title:`... ${y} more`,onAction:()=>ve()}),children:S.packages.map(y=>{let m=nt(y);return(0,E.jsx)(G,{title:y.name,subtitle:y.repository?.full_name,icon:rt(y.package_type),tooltip:m===void 0?void 0:Be(m,"version",{withNumber:!0}),onAction:()=>(0,I.open)(y.html_url)},y.id)})},S.packageType)),!n&&c.length===0?(0,E.jsx)(Y,{children:(0,E.jsx)(G,{title:"No Packages",icon:I.Icon.Info})}):null,p.length>0?(0,E.jsx)(Y,{children:(0,E.jsx)(G,{title:`Couldn't load ${p.map(Le).join(", ")}`,icon:{source:I.Icon.Warning,tintColor:I.Color.Orange},tooltip:"Some packages may be missing from this menu",onAction:()=>ve()})}):null,f&&!R?(0,E.jsx)(Y,{children:(0,E.jsx)(G,{title:"Couldn't refresh packages",icon:{source:I.Icon.Warning,tintColor:I.Color.Orange},tooltip:f,onAction:()=>ve()})}):null,a&&!s&&o.length>0?(0,E.jsx)(Y,{children:(0,E.jsx)(G,{title:`No package named "${a}"`,icon:{source:I.Icon.Warning,tintColor:I.Color.Orange},tooltip:"Check the Menu Bar Title preference",onAction:()=>(0,I.openCommandPreferences)()})}):null,(0,E.jsxs)(Y,{children:[(0,E.jsx)(G,{title:"Open My Packages",icon:I.Icon.AppWindowList,shortcut:I.Keyboard.Shortcut.Common.Open,onAction:()=>ve()}),(0,E.jsx)(We,{})]})]})}var wr=Ft(Tr);
