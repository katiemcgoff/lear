# Copyright © 2019 Province of British Columbia
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Tests to assure the ops end-point.

Test-Suite to ensure that the /ops endpoint is working as expected.
"""

from tests.utilities.schema_assertions import assert_valid_schema
from tests import oracle_integration

@oracle_integration
def test_get_ar(client):
    """Assert that the business info for regular (not xpro) business is correct to spec."""
    rv = client.get('/api/v1/businesses/CP0001965/filings/annual_report')

    assert 200 == rv.status_code
    assert_valid_schema(rv.json, 'legal_filings.json')

@oracle_integration
def test_get_ar_no_results(client):
    """Assert that the business info for regular (not xpro) business is correct to spec."""
    rv = client.get('/api/v1/businesses/CP0000000/filings/annual_report')

    assert 404 == rv.status_code

@oracle_integration
def test_get_ar_by_year(client):
    """Assert that the business info for regular (not xpro) business is correct to spec."""
    rv = client.get('/api/v1/businesses/CP0001965/filings/annual_report?year=2015')

    assert 200 == rv.status_code
    assert_valid_schema(rv.json, 'legal_filings.json')

@oracle_integration
def test_get_ar_by_year_invalid(client):
    """Assert that the business info for regular (not xpro) business is correct to spec."""
    rv = client.get('/api/v1/businesses/CP0001965/filings/annual_report?year=BLA')

    assert 500 == rv.status_code

