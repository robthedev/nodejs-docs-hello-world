export default {
  items: [
    {
      name: 'Library',
      url: '/library',
      icon: 'cui-dashboard',
      variant: 'primary'
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
      divider: true
    },
    // {
    //   title: true,
    //   name: 'Libraries',
    //   wrapper: {
    //     // optional wrapper object
    //     element: '', // required valid HTML5 element tag
    //     attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: '' // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'Books',
      url: '/library/books',
      icon: 'icon-pencil'
    },
    {
      name: 'Movies',
      url: '/library/movies',
      icon: 'cui-screen-desktop'
    },
    {
      name: 'Shows',
      url: '/library/shows',
      icon: 'cui-screen-smartphone'
    },
    {
      name: 'Settings',
      url: '/library/settings',
      icon: 'cui-settings'
    },
    {
      name: 'Support',
      url: '/library/support',
      icon: 'cui-comment-square'
    },
    {
      name: 'Recommendations',
      url: '/library/recommendations',
      icon: 'cui-graph'
    },
    {
      name: 'More Apps',
      url: '#',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: '',
      attributes: { target: '_blank', rel: 'noopener' }
    }
  ]
};
