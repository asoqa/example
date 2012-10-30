{ 
    "query": { 
        "match_all": {} 
    }, 
    "facets": { 
        "facet1": { 
            "terms_stats": { 
                "key_field" : "name", 
                "value_field": "count" 
            }, 
            "nested": "obj1" 
        } 
    } 
}