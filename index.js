/*
    reactions = {
        likes: 0,
        dislikes: 0
    }
    
    setReactions(0):
        reactions = 0

    setReactions(true):
        reactions = true

    setReactions(reactions.likes + 1) => setReactions(1) => reactions = 1 x

    setReactions({
        likes: reactions.likes + 1
    })
    
    => 
    
    setReactions({
        ...reactions,
        likes: 2
    }) => 
    
    setReactions({
        dislikes: 0,
        likes: 1
    })
    
    setReactions({
        likes: 1,
        dislikes: 1
    })
*/