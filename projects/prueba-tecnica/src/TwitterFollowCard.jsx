export function TwitterFollowCard({userName, name}) {
    return (
        <article className= 'tw-followCard'>
        <header className = 'tw-followCard-header'>
            <img className = 'tw-followCard-avatar' alt= "Avatar 1" src = {`https://unavatar.io/${userName}`} />
        <div className = 'tw-followCard-info'>
            <strong className = 'tw-followCard-infoUserName'>{userName}</strong>
            <span className = 'tw-followCard-infoUserName'>{name}</span>
        </div>
        </header>
        <aside>
            <button className = 'tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    )
}