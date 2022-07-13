"""empty message

Revision ID: 0dff8913759a
Revises: 
Create Date: 2022-07-09 10:55:45.208678

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0dff8913759a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('birthplan_section',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('video', sa.String(length=200), nullable=True),
    sa.Column('title', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('business_faq',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question_id', sa.String(length=5), nullable=True),
    sa.Column('question', sa.String(length=200), nullable=True),
    sa.Column('answer_id', sa.String(length=5), nullable=True),
    sa.Column('answer', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('answer_id'),
    sa.UniqueConstraint('question_id')
    )
    op.create_table('calendar_availability',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=True),
    sa.Column('time', sa.Time(), nullable=True),
    sa.Column('is_available', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
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
    op.create_table('user_faq',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question_id', sa.String(length=5), nullable=True),
    sa.Column('question', sa.String(length=200), nullable=True),
    sa.Column('answer_id', sa.String(length=5), nullable=True),
    sa.Column('answer', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('answer_id'),
    sa.UniqueConstraint('question_id')
    )
    op.create_table('user_rol',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rol', sa.String(length=150), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('birthplan_subsection',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('subtitle', sa.String(length=100), nullable=True),
    sa.Column('birthplan_section_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['birthplan_section_id'], ['birthplan_section.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('type', sa.Integer(), nullable=True),
    sa.Column('session_time', sa.Float(), nullable=True),
    sa.Column('session_qty', sa.Integer(), nullable=True),
    sa.Column('sold_per_units', sa.Boolean(), nullable=True),
    sa.Column('description', sa.String(length=2000), nullable=True),
    sa.Column('description_short', sa.String(length=1000), nullable=True),
    sa.Column('description_includes', sa.String(length=1500), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('discount', sa.Integer(), nullable=True),
    sa.Column('service_cover_url', sa.String(length=500), nullable=True),
    sa.Column('qty', sa.Integer(), nullable=True),
    sa.Column('qty_error', sa.String(length=200), nullable=True),
    sa.Column('selected', sa.Boolean(), nullable=True),
    sa.Column('modal_selected_KO', sa.String(length=50), nullable=True),
    sa.Column('stripe_price_id', sa.String(length=200), nullable=True),
    sa.Column('stripe_product_id', sa.String(length=200), nullable=True),
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
    op.create_table('appointment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service', sa.Integer(), nullable=True),
    sa.Column('date', sa.Date(), nullable=True),
    sa.Column('time', sa.Time(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['service'], ['service.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('birthplan_answer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('birthplan_section_id', sa.Integer(), nullable=True),
    sa.Column('birthplan_subsection_id', sa.Integer(), nullable=True),
    sa.Column('answer_type', sa.String(length=50), nullable=False),
    sa.Column('answer_text', sa.String(length=300), nullable=False),
    sa.Column('checked', sa.Boolean(), nullable=False),
    sa.Column('input_text', sa.String(length=300), nullable=True),
    sa.Column('multiselect', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['birthplan_section_id'], ['birthplan_section.id'], ),
    sa.ForeignKeyConstraint(['birthplan_subsection_id'], ['birthplan_subsection.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('birthplan_comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('birthplan_section_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('comment_text', sa.String(length=600), nullable=False),
    sa.ForeignKeyConstraint(['birthplan_section_id'], ['birthplan_section.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('birthplan_form',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=50), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=False),
    sa.Column('pregnancy_num', sa.Integer(), nullable=True),
    sa.Column('birth_num', sa.Integer(), nullable=True),
    sa.Column('interruption_num', sa.Integer(), nullable=True),
    sa.Column('birth_date', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service_documents',
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
    sa.Column('sessions_left', sa.Integer(), nullable=True),
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
    op.drop_table('service_documents')
    op.drop_table('birthplan_form')
    op.drop_table('birthplan_comment')
    op.drop_table('birthplan_answer')
    op.drop_table('appointment')
    op.drop_table('ServiceDocument')
    op.drop_table('users')
    op.drop_table('service')
    op.drop_table('birthplan_subsection')
    op.drop_table('user_rol')
    op.drop_table('user_faq')
    op.drop_table('service_type')
    op.drop_table('document')
    op.drop_table('calendar_availability')
    op.drop_table('business_faq')
    op.drop_table('birthplan_section')
    # ### end Alembic commands ###
