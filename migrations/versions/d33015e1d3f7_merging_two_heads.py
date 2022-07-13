"""merging two heads

Revision ID: d33015e1d3f7
Revises: d1fa36fbc513, 0e882cff5fbb
Create Date: 2022-07-13 14:20:18.425189

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd33015e1d3f7'
down_revision = ('d1fa36fbc513', '0e882cff5fbb')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
