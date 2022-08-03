/*
 * @Author: TonyInBeijing
 * @Date: 2022-08-01 21:41:41
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-08-03 23:03:47
 * @FilePath: /nextjs-project/pages/posts/first-post.js
 * @Description: first post page
 * 
 */

// TODO: 获取博文内容，会在构建时调用
export async function getStaticProps() {
    const requestRes = await fetch("xxxx.com/content/getcontent");
    return {
        props: {
            postContent: requestRes
        }
    }
};

export default function FirstPost({ postContent }) {
    return postContent;
}