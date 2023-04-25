
export default function FilterPosts({handleSearch}) {
    
    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch} />
        </div>
    )
}