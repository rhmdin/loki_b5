const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database_server");

const express = require('express');
const server = express();
var router = express.Router();

sequelize.define('courses' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    curriculum_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false,
    },
    alias_name:
    {
        type : DataTypes.TEXT,
        allowNull: false,
    },
    credit:
    {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    semester:
    {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    description:
    {
        type : DataTypes.TEXT,
        allowNull: false,
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_los' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    type:
    {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    code:
    {
        type : DataTypes.TEXT,
        allowNull: false,
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false,
    },
    parent_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_lo_details' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    curriculum_lo_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    course_lo_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plans' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false
    },

    rev:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    }, 

    code:
    {
        type : DataTypes.STRING,
        allowNull: false 
    },

    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },

    alias_name:
    {
        type : DataTypes.TEXT,
        allowNull : true
    },

    credit:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    },

    semester:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },

    description:
    {
        type : DataTypes.TEXT,
        allowNull: true

    },

    material:
    {
        type : DataTypes.TEXT,
        allowNull: true
    }, 

    created_by:
    {
        type : DataTypes.BIGINT,
        allowNull: true
    }, 

    validated_by:
    {
        type : DataTypes.BIGINT,
        allowNull: true
    }, 

    validated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }, 

    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }, 

    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_assessments' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    bane:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    percentage:
    {
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    flag:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_details' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    week:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    material:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    method:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    student_experience:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_detail_assessments' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_detail_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    course_plan_assessment_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    percentage:
    {
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_detail_outcomes' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_detail_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    course_lo_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_detail_refs' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_detail_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    course_plan_reference_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    category:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_lecturers' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    lecturer_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    creator:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_plan_references' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    title:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    author:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    publisher:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    year:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    description:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('course_reqruitments' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    course_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    required_course_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    required_level:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('curricula' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    active:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    year_start:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    year_end:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    description:
    {
        type : DataTypes.TEXT,
        allowNull: true
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('curriculum_los' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    curriculum_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    code:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    type:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    description:
    {
        type : DataTypes.TEXT,
        allowNull: true
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('curriculum_profiles' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    curriculum_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    code:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    profile:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },
    description:
    {
        type : DataTypes.TEXT,
        allowNull: true
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('failed_jobs' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    uuid:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    }, 
    connection:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    }, 
    queue:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    }, 
    payload:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    }, 
    exception:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    }, 
    failed_at:
    {
        type : DataTypes.DATE,
        allowNull: false 
    }
});

sequelize.define('lectures' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },    
    reg_id:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },
    phone:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },
    status:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },    
    update_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
});

sequelize.define('migrations' ,
{
    id:{
        type : DataTypes.INTEGER,
        primaryKey  : true,
        allowNull: false 
    },
    migration:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    batch:{
        type : DataTypes.INTEGER,
        allowNull: false 
    }
});

sequelize.define('model_has_permissions' ,
{
    permission_id:{
        type : DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    model_type:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    model_id:{
        type : DataTypes.BIGINT,
        allowNull: false,
    }
});

sequelize.define('model_has_roles' ,
{
    role_id:{
        type : DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    model_type:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    model_id:{
        type : DataTypes.BIGINT,
        allowNull: false,
    }
});

sequelize.define('password_resets' ,
{
    email:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    token:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    created_at:{
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('permissions' ,
{
    id:{
        type : DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey  : true
    },
    name:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    guard_name:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    created_at:{
        type : DataTypes.DATE,
        allowNull: true
    },    
    update_at:{
        type : DataTypes.DATE,
        allowNull: true
    },
});

sequelize.define('roles' ,
{
    id:{
        type : DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey  : true
    },
    name:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    guard_name:{
        type : DataTypes.TEXT,
        allowNull: false 
    },
    created_at:{
        type : DataTypes.DATE,
        allowNull: true
    },    
    update_at:{
        type : DataTypes.DATE,
        allowNull: true
    }
});

sequelize.define('role_has_permissions' ,
{
    permissions_id:{
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey  : true
    },
    role_id:{
        type : DataTypes.BIGINT,
        allowNull: false 
    }
});

sequelize.define('users' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },    
    email:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },
    email_verified_at:
    {
        type : DataTypes.DATE,
        allowNull: true 
    },    
    password:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },
    remember_token:
    {
        type : DataTypes.TEXT,
        allowNull: true
    },    
    type:
    {
        type : Sequelize.ENUM('M', 'D', 'T'),
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },    
    update_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
});

module.exports=router;

