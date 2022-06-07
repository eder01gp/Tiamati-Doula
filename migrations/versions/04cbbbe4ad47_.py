"""empty message

Revision ID: 04cbbbe4ad47
Revises: 
Create Date: 2022-06-02 09:37:25.425979

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '04cbbbe4ad47'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('document',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('document_url', sa.String(length=300), nullable=True),
    sa.Column('document_name', sa.String(length=300), nullable=True),
    sa.Column('document_description', sa.String(length=300), nullable=True),
    sa.Column('document_cover_url', sa.String(length=300), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_type', sa.String(length=150), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('service_type')
    )
    op.create_table('user_rol',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rol', sa.String(length=150), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('type', sa.Integer(), nullable=True),
    sa.Column('session_time', sa.Float(), nullable=True),
    sa.Column('session_qty', sa.Integer(), nullable=True),
    sa.Column('sold_per_units', sa.Boolean(), nullable=True),
    sa.Column('description', sa.String(length=1000), nullable=True),
    sa.Column('description_includes', sa.String(length=1000), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('discount', sa.Integer(), nullable=True),
    sa.Column('service_cover_url', sa.String(length=500), nullable=True),
    sa.Column('qty', sa.Integer(), nullable=True),
    sa.Column('qty_error', sa.String(length=200), nullable=True),
    sa.Column('selected', sa.Boolean(), nullable=True),
    sa.Column('modal_selected_KO', sa.String(length=50), nullable=True),
    sa.ForeignKeyConstraint(['type'], ['service_type.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('rol', sa.Integer(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['rol'], ['user_rol.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('ServiceDocument',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('document_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['document_id'], ['document.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['service.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service_hired',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['service_id'], ['service.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service_rols',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('rol_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['rol_id'], ['user_rol.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['service.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service_to_service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_id_father', sa.Integer(), nullable=True),
    sa.Column('service_id_child', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['service_id_child'], ['service.id'], ),
    sa.ForeignKeyConstraint(['service_id_father'], ['service.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_data',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=150), nullable=True),
    sa.Column('pregnancy_weeks', sa.Integer(), nullable=True),
    sa.Column('aproximate_birth_date', sa.Date(), nullable=True),
    sa.Column('children_number', sa.Integer(), nullable=True),
    sa.Column('caesarean_sections_number', sa.Integer(), nullable=True),
    sa.Column('companion', sa.String(length=250), nullable=True),
    sa.Column('city', sa.String(length=150), nullable=True),
    sa.Column('birth_place', sa.String(length=120), nullable=True),
    sa.Column('current_hospital', sa.String(length=250), nullable=True),
    sa.Column('avatar', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_data')
    op.drop_table('service_to_service')
    op.drop_table('service_rols')
    op.drop_table('service_hired')
    op.drop_table('ServiceDocument')
    op.drop_table('users')
    op.drop_table('service')
    op.drop_table('user_rol')
    op.drop_table('service_type')
    op.drop_table('document')
    # ### end Alembic commands ###
