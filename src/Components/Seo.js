import Helmat from 'react-helmet' ;
import { DOCUMENT } from '../Util/routes';
import { webData } from '../Util/util' ;

const Seo = ({ title, url, description, type, image }) => {

    const { webUrl, titleData, name } = webData ;

    const jsonLd = [
        {
            '@context' : 'https://schema.org',
            '@type' : 'WebSite',
            'url' : webUrl,
            'name' : `${titleData} ${name}`,
            'alternateName' : name,
            'logo' : '/logo192.webp'
        }
    ] ;

    if(type) {
        jsonLd.push(
            {
                '@context' : 'https://schema.org',
                '@type' : 'BreadcrumbList',
                itemListElement : [
                    {
                        '@type' : 'ListItem',
                        'position' : 1,
                        'item' : {
                            '@id' : `${webUrl}${DOCUMENT}`,
                            'name' : 'blog',
                            'image' : '/logo512.webp'
                        },
                    },
                    {
                        '@type' : 'ListItem',
                        'position' : 2,
                        'item' : {
                            '@id' : `${webUrl}${url}`,
                            'name' : `${type} : ${title}`,
                            image,
                        }
                    }
                ]
            },
            {
                '@context' : 'http://schema.org',
                '@type' : 'BlogPosting',
                'url' : `${webUrl}${url}`,
                'name' : `${type} : ${title} | ${name}`,
                'alternateName' : name,
                'headline' : title,
                'description' : description,
                'image' : {
                    '@type' : 'ImageObject',
                    'url' : image
                }
            }
        )
    } ;

    return (
        <Helmat>
            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`${webUrl}${url}`}/>
            <meta property="og:image" content={image}/>
            <meta property="og:description" content={description} />
            <meta name="url" content={`${webUrl}${url}`} />
            <meta name="description" content={description} />
            <meta name="image" content={`${webUrl}${url}`} />
            <title>{title ? `${type ? `${type} : ` : `${titleData} `} ${title} | ${name}` : `${titleData} | ${name}`}</title>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmat>
    );
};

export default Seo;