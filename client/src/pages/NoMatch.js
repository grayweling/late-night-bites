import React from 'react';

const NoMatch = () => {
    return (
        <main className='min-h-screen min-w-screen flex flex-col text-[#BE95FA] bg-[#212121]'>
            <section className="flex flex-wrap flex-grow items-center justify-center bg-[#212121]">
                <div className="flex flex-col gap-9 m-4">

                    <h1 className="mt-12 mb-4 text-[#16AC97] text-center text-5xl">Page Could Not be Found</h1>
                </div>
            </section>
        </main>
    );
};

export default NoMatch;