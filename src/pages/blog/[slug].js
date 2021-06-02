import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SinglePost from '../../components/SinglePost';
import { getPostSlugs, getPostData } from '../../utils/posts';

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
};

export const getStaticPaths = () => {
    const paths = getPostSlugs();
    return {
        paths,
        fallback: false,
    };
};

const BlogPost = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{postData.postTitle} // UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header bgImage={postData.featuredImage} />
                <main>
                    <SinglePost post={postData} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default BlogPost;