import { Helmet } from 'react-helmet';

function MetaTags({ title, description, publishedDate }) {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="article:published_time" content={publishedDate} />
      </Helmet>
    );
  }

export default MetaTags;