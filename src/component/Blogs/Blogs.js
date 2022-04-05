import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 grid lg:grid-cols-2 gap-10 mx-auto my-10'>
            <div className='border-2 rounded p-3'>
                <h3 className='text-2xl my-3'>What is Context API</h3>
                <p>
                    The React Context API is a way to create global varibales for a React App that can be passed data around and solves one major problem "props drilling" from all levels of your application.It is moving props from grandparent component to child component.This is an alternative way to "props drilling".If youn create Context API,you need React.createContext(). React.createContext() returns a consumer and a provider.Provider is a component that share the value or state to its childern.And consumer is that uses the state or value.
                </p>
            </div>
            <div className='border-2 rounded p-3'>
                <h3 className='text-2xl my-3'>What is semantic tag</h3>
                <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Search engines will consider its contents as important keywords to influence the page's search rankings.Some semantic tags are "article tag, aside tag, details tag,figcaption tag, footer tag, header tag, main tag".Using semantic tags gives you many more hooks for styling your content</p>
            </div>
        </div>
    );
};

export default Blogs;