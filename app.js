// app.js
const express = require('express');

const app = express();
const port = 3000;

// Datos de categorías
const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

// Función para obtener la ruta de la categoría (con búsqueda insensible a mayúsculas/minúsculas)
const getCategoryPath = (categories, categoryName, currentPath = []) => {
    for (const category of categories) {
        const newPath = [...currentPath, category.name];

        // Búsqueda insensible a mayúsculas/minúsculas
        if (category.name.toLowerCase() === categoryName.toLowerCase()) {
            return `/${newPath.join('/')}`;
        }

        // Buscar en subcategorías
        if (category.subcategories.length > 0) {
            const foundPath = getCategoryPath(category.subcategories, categoryName, newPath);
            if (foundPath) return foundPath;
        }
    }
    return null;
};

// Ruta para probar la función
app.get('/category-path', (req, res) => {
    const categoryName = req.query.name; // Obtener el nombre de la categoría desde la query string

    // Validar que se proporcionó un nombre de categoría
    if (!categoryName) {
        return res.status(400).json({ error: 'Debes proporcionar un nombre de categoría.' });
    }

    // Obtener la ruta de la categoría
    const path = getCategoryPath(categories, categoryName);

    // Si se encontró la categoría, devolver la ruta
    if (path) {
        return res.json({ category: categoryName, path });
    } else {
        // Si no se encontró, devolver un error 404 con un mensaje descriptivo
        return res.status(404).json({ error: `La categoría '${categoryName}' no fue encontrada.` });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});