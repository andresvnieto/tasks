function ListSkeleton() {
    const items = [1, 2, 3, 4, 5]
    return (
        <>
            {items.map(i => (<li key={ i } className={`p-6 h-20 my-6 bg-slate-700 rounded-3xl text-cyan-950 flex justify-between align-middle transition ease-in-out hover:drop-shadow-xl `}></li>))}

        </>
    )
}

export default ListSkeleton