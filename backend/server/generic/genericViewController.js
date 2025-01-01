
const genericViewController = ( model, fieldsToPopulate ) => ({
    
    getAll: async ( req, res ) => {
        try {

            let { page, offset } = req.query;
            if ( !offset ) offset = process.env.DEFAULT_PAGE_OFFSET;

            console.log( page, offset );

            let query = model.find();

            const pages = parseInt(( await model.find() ).length/offset) + 1;
            console.log(pages);
            if ( page ){
                page = parseInt(page);
                page = page > pages ? 0 : page;
                query = model.find().limit(offset);
            }

            if ( fieldsToPopulate.length > 0 ){
                fieldsToPopulate.forEach(field => {
                    query = query.populate(field);
                });
            }
            const data = await query;
            
            if( page ){
                res.status(200).json({ pages, page, data });
            }else {
                res.status(200).json(data);
            }
        } catch ( error ){
            res.status(500).json({error: error.message });
        }
    },

    getById: async ( req, res ) => {
        try {
            const { id } = req.params;
            let document = await model.findById(id);
            if ( fieldsToPopulate.length > 0 ){
                fieldsToPopulate.forEach(field => {
                    document = document.populate(field);
                });
            }
            const data = await document;
            if (!data) return res.status(404).json({error:"Not found"});
            res.status(200).json(data);
        } catch ( error ){
            res.status(500).json( { error : error.message } )
        }
    },

    getSearched: async ( req, res ) => {
        try {
            let { page, offset, ...searchBody } = req.query;
            if ( !offset ) offset = process.env.DEFAULT_PAGE_OFFSET;

            console.log( page, offset, searchBody );

            let query = model.find(searchBody);

            const pages = parseInt(( await model.find(searchBody) ).length/offset) + 1;
            console.log(pages);
            if ( page ){
                page = parseInt(page);
                page = page > pages ? 0 : page;
                query = model.find().limit(offset);
            }

            if ( fieldsToPopulate.length > 0 ){
                fieldsToPopulate.forEach(field => {
                    query = query.populate(field);
                });
            }
            const data = await query;
            
            if( page ){
                res.status(200).json({ pages, page, data });
            }else {
                res.status(200).json(data);
            }
        } catch ( error ){
            res.status(500).json({error: error.message });
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
