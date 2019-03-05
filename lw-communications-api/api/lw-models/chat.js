/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_mailed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_seen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    message_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sent_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sent_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chat_room_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'chat_room',
        key: 'id'
      }
    },
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    server_file_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'server_file',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'chat'
  });
};
