import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <title>Sick Fits!</title>
      {/* This viewport allow us to have responsive design */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charset="utf-8" />
      <meta rel="shortcut icon" href="/static/favicon.png"/>
      {/* this is the line effect under the menu items */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
  )
}

export default Meta
