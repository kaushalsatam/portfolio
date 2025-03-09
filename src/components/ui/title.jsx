function Title({ subtitle, title }) {
    return <>
        <div className="flex flex-col m-8">
            <p className="text-center text-gray-300">{subtitle}</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-center m-2">{title}</h2>
        </div>
    </>
}

export default Title;
