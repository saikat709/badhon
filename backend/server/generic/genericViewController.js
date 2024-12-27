
const genericViewController = ( model ) => ({
    
    getAll: async ( req, res ) => {
        try {
            const data = await model.find();
            res.status(200).json(data);
        } catch ( error ){
            res.status(500).json({error: error.message });
        }
    },

    getById: async ( req, res ) => {
        try {
            const { id } = req.params;
            const data = await model.findById(id);
            if (!data) return res.status(404).json({error:"Not found"});
            res.status(200).json(data);
        } catch ( error ){
            res.status(500).json( { error : error.message } )
        }
    },

    create: async ( req, res ) => {
        try {
            const newItem = new model(req.body);
            const savedItem = await newItem.save();
            res.status(201).json(savedItem);
        } catch {
            res.status(400).json({error: error.message});
        }
    },

    update: async ( req, res ) => {
        try {
            const { id } = req.params;
            const updatedItem = await model.findByIdAndUpdate( id, req.body, {
                new: true,
                runValidators: true,
            });
            if ( !updatedItem ) return res.status(404).json({ error: "Not found" });
            res.status(201).json( updatedItem );
        } catch {
            res.status(400).json({error: error.message});
        }
    },

    delete: async ( req, res ) => {
        try {
            const { id } = req.params;
            const deletedItem = await model.findByIdAndDelete(id);
            if (!deletedItem) return res.status(404).json( { error : "not Found." } )
            res.status(201).json({});
        } catch {
            res.status(500).json({error: error.message});
        }
    },

});

export default genericViewController;