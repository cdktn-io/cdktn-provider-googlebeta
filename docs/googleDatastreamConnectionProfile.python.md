# `googleDatastreamConnectionProfile` Submodule <a name="`googleDatastreamConnectionProfile` Submodule" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamConnectionProfile <a name="GoogleDatastreamConnectionProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_profile_id: str,
  display_name: str,
  location: str,
  bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfile = None,
  create_without_validation: bool | IResolvable = None,
  deletion_policy: str = None,
  forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity = None,
  gcs_profile: GoogleDatastreamConnectionProfileGcsProfile = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mongodb_profile: GoogleDatastreamConnectionProfileMongodbProfile = None,
  mysql_profile: GoogleDatastreamConnectionProfileMysqlProfile = None,
  oracle_profile: GoogleDatastreamConnectionProfileOracleProfile = None,
  postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfile = None,
  private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivity = None,
  project: str = None,
  salesforce_profile: GoogleDatastreamConnectionProfileSalesforceProfile = None,
  spanner_profile: GoogleDatastreamConnectionProfileSpannerProfile = None,
  sql_server_profile: GoogleDatastreamConnectionProfileSqlServerProfile = None,
  timeouts: GoogleDatastreamConnectionProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.createWithoutValidation">create_without_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.mongodbProfile">mongodb_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.salesforceProfile">salesforce_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | salesforce_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.spannerProfile">spanner_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | spanner_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.sqlServerProfile">sql_server_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connectionProfileId"></a>

- *Type:* str

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `bigquery_profile`<sup>Optional</sup> <a name="bigquery_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.bigqueryProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.createWithoutValidation"></a>

- *Type:* bool | cdktn.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#create_without_validation GoogleDatastreamConnectionProfile#create_without_validation}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#deletion_policy GoogleDatastreamConnectionProfile#deletion_policy}

---

##### `forward_ssh_connectivity`<sup>Optional</sup> <a name="forward_ssh_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcs_profile`<sup>Optional</sup> <a name="gcs_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.gcsProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `mongodb_profile`<sup>Optional</sup> <a name="mongodb_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.mongodbProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#mongodb_profile GoogleDatastreamConnectionProfile#mongodb_profile}

---

##### `mysql_profile`<sup>Optional</sup> <a name="mysql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.mysqlProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `oracle_profile`<sup>Optional</sup> <a name="oracle_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.oracleProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `postgresql_profile`<sup>Optional</sup> <a name="postgresql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.postgresqlProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `private_connectivity`<sup>Optional</sup> <a name="private_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.privateConnectivity"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `salesforce_profile`<sup>Optional</sup> <a name="salesforce_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.salesforceProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

salesforce_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#salesforce_profile GoogleDatastreamConnectionProfile#salesforce_profile}

---

##### `spanner_profile`<sup>Optional</sup> <a name="spanner_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.spannerProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

spanner_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#spanner_profile GoogleDatastreamConnectionProfile#spanner_profile}

---

##### `sql_server_profile`<sup>Optional</sup> <a name="sql_server_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.sqlServerProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#sql_server_profile GoogleDatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile">put_bigquery_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity">put_forward_ssh_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile">put_gcs_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile">put_mongodb_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile">put_mysql_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile">put_oracle_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile">put_postgresql_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity">put_private_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile">put_salesforce_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile">put_spanner_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile">put_sql_server_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile">reset_bigquery_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation">reset_create_without_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity">reset_forward_ssh_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile">reset_gcs_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMongodbProfile">reset_mongodb_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile">reset_mysql_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile">reset_oracle_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile">reset_postgresql_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity">reset_private_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSalesforceProfile">reset_salesforce_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSpannerProfile">reset_spanner_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile">reset_sql_server_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigquery_profile` <a name="put_bigquery_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile"></a>

```python
def put_bigquery_profile() -> None
```

##### `put_forward_ssh_connectivity` <a name="put_forward_ssh_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity"></a>

```python
def put_forward_ssh_connectivity(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.hostname"></a>

- *Type:* str

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.username"></a>

- *Type:* str

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.password"></a>

- *Type:* str

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.privateKey"></a>

- *Type:* str

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

##### `put_gcs_profile` <a name="put_gcs_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile"></a>

```python
def put_gcs_profile(
  bucket: str,
  root_path: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.bucket"></a>

- *Type:* str

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

###### `root_path`<sup>Optional</sup> <a name="root_path" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.rootPath"></a>

- *Type:* str

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

##### `put_mongodb_profile` <a name="put_mongodb_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile"></a>

```python
def put_mongodb_profile(
  host_addresses: IResolvable | typing.List[GoogleDatastreamConnectionProfileMongodbProfileHostAddresses],
  username: str,
  password: str = None,
  replica_set: str = None,
  secret_manager_stored_password: str = None,
  srv_connection_format: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat = None,
  ssl_config: GoogleDatastreamConnectionProfileMongodbProfileSslConfig = None,
  standard_connection_format: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat = None
) -> None
```

###### `host_addresses`<sup>Required</sup> <a name="host_addresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.hostAddresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]

host_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#host_addresses GoogleDatastreamConnectionProfile#host_addresses}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.username"></a>

- *Type:* str

Username for the MongoDB connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.password"></a>

- *Type:* str

Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `replica_set`<sup>Optional</sup> <a name="replica_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.replicaSet"></a>

- *Type:* str

Name of the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#replica_set GoogleDatastreamConnectionProfile#replica_set}

---

###### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.secretManagerStoredPassword"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

###### `srv_connection_format`<sup>Optional</sup> <a name="srv_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.srvConnectionFormat"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

srv_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#srv_connection_format GoogleDatastreamConnectionProfile#srv_connection_format}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

###### `standard_connection_format`<sup>Optional</sup> <a name="standard_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.standardConnectionFormat"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

standard_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#standard_connection_format GoogleDatastreamConnectionProfile#standard_connection_format}

---

##### `put_mysql_profile` <a name="put_mysql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile"></a>

```python
def put_mysql_profile(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None,
  ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfig = None
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.username"></a>

- *Type:* str

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.password"></a>

- *Type:* str

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.secretManagerStoredPassword"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

##### `put_oracle_profile` <a name="put_oracle_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile"></a>

```python
def put_oracle_profile(
  database_service: str,
  hostname: str,
  username: str,
  connection_attributes: typing.Mapping[str] = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None
) -> None
```

###### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.databaseService"></a>

- *Type:* str

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.username"></a>

- *Type:* str

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `connection_attributes`<sup>Optional</sup> <a name="connection_attributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.connectionAttributes"></a>

- *Type:* typing.Mapping[str]

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.password"></a>

- *Type:* str

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.secretManagerStoredPassword"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `put_postgresql_profile` <a name="put_postgresql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile"></a>

```python
def put_postgresql_profile(
  database: str,
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None,
  ssl_config: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.database"></a>

- *Type:* str

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.username"></a>

- *Type:* str

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.password"></a>

- *Type:* str

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.secretManagerStoredPassword"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

##### `put_private_connectivity` <a name="put_private_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity"></a>

```python
def put_private_connectivity(
  private_connection: str
) -> None
```

###### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity.parameter.privateConnection"></a>

- *Type:* str

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

##### `put_salesforce_profile` <a name="put_salesforce_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile"></a>

```python
def put_salesforce_profile(
  domain: str,
  oauth2_client_credentials: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials = None,
  user_credentials: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials = None
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile.parameter.domain"></a>

- *Type:* str

Domain for the Salesforce Org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#domain GoogleDatastreamConnectionProfile#domain}

---

###### `oauth2_client_credentials`<sup>Optional</sup> <a name="oauth2_client_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile.parameter.oauth2ClientCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#oauth2_client_credentials GoogleDatastreamConnectionProfile#oauth2_client_credentials}

---

###### `user_credentials`<sup>Optional</sup> <a name="user_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile.parameter.userCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#user_credentials GoogleDatastreamConnectionProfile#user_credentials}

---

##### `put_spanner_profile` <a name="put_spanner_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile"></a>

```python
def put_spanner_profile(
  database: str,
  host: str = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile.parameter.database"></a>

- *Type:* str

The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile.parameter.host"></a>

- *Type:* str

The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#host GoogleDatastreamConnectionProfile#host}

---

##### `put_sql_server_profile` <a name="put_sql_server_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile"></a>

```python
def put_sql_server_profile(
  database: str,
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.database"></a>

- *Type:* str

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.username"></a>

- *Type:* str

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.password"></a>

- *Type:* str

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.secretManagerStoredPassword"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

##### `reset_bigquery_profile` <a name="reset_bigquery_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile"></a>

```python
def reset_bigquery_profile() -> None
```

##### `reset_create_without_validation` <a name="reset_create_without_validation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```python
def reset_create_without_validation() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_forward_ssh_connectivity` <a name="reset_forward_ssh_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```python
def reset_forward_ssh_connectivity() -> None
```

##### `reset_gcs_profile` <a name="reset_gcs_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile"></a>

```python
def reset_gcs_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mongodb_profile` <a name="reset_mongodb_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMongodbProfile"></a>

```python
def reset_mongodb_profile() -> None
```

##### `reset_mysql_profile` <a name="reset_mysql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile"></a>

```python
def reset_mysql_profile() -> None
```

##### `reset_oracle_profile` <a name="reset_oracle_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile"></a>

```python
def reset_oracle_profile() -> None
```

##### `reset_postgresql_profile` <a name="reset_postgresql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile"></a>

```python
def reset_postgresql_profile() -> None
```

##### `reset_private_connectivity` <a name="reset_private_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity"></a>

```python
def reset_private_connectivity() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_salesforce_profile` <a name="reset_salesforce_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSalesforceProfile"></a>

```python
def reset_salesforce_profile() -> None
```

##### `reset_spanner_profile` <a name="reset_spanner_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSpannerProfile"></a>

```python
def reset_spanner_profile() -> None
```

##### `reset_sql_server_profile` <a name="reset_sql_server_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile"></a>

```python
def reset_sql_server_profile() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDatastreamConnectionProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfile">mongodb_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference">GoogleDatastreamConnectionProfileMongodbProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfile">salesforce_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfile">spanner_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference">GoogleDatastreamConnectionProfileSpannerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile">sql_server_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput">bigquery_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput">connection_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput">create_without_validation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput">forward_ssh_connectivity_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput">gcs_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfileInput">mongodb_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput">mysql_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput">oracle_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput">postgresql_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput">private_connectivity_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfileInput">salesforce_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfileInput">spanner_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput">sql_server_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation">create_without_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bigquery_profile`<sup>Required</sup> <a name="bigquery_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile"></a>

```python
bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `forward_ssh_connectivity`<sup>Required</sup> <a name="forward_ssh_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```python
forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcs_profile`<sup>Required</sup> <a name="gcs_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile"></a>

```python
gcs_profile: GoogleDatastreamConnectionProfileGcsProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mongodb_profile`<sup>Required</sup> <a name="mongodb_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfile"></a>

```python
mongodb_profile: GoogleDatastreamConnectionProfileMongodbProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference">GoogleDatastreamConnectionProfileMongodbProfileOutputReference</a>

---

##### `mysql_profile`<sup>Required</sup> <a name="mysql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile"></a>

```python
mysql_profile: GoogleDatastreamConnectionProfileMysqlProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oracle_profile`<sup>Required</sup> <a name="oracle_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile"></a>

```python
oracle_profile: GoogleDatastreamConnectionProfileOracleProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresql_profile`<sup>Required</sup> <a name="postgresql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile"></a>

```python
postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `private_connectivity`<sup>Required</sup> <a name="private_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity"></a>

```python
private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `salesforce_profile`<sup>Required</sup> <a name="salesforce_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfile"></a>

```python
salesforce_profile: GoogleDatastreamConnectionProfileSalesforceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOutputReference</a>

---

##### `spanner_profile`<sup>Required</sup> <a name="spanner_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfile"></a>

```python
spanner_profile: GoogleDatastreamConnectionProfileSpannerProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference">GoogleDatastreamConnectionProfileSpannerProfileOutputReference</a>

---

##### `sql_server_profile`<sup>Required</sup> <a name="sql_server_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile"></a>

```python
sql_server_profile: GoogleDatastreamConnectionProfileSqlServerProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts"></a>

```python
timeouts: GoogleDatastreamConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigquery_profile_input`<sup>Optional</sup> <a name="bigquery_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```python
bigquery_profile_input: GoogleDatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `connection_profile_id_input`<sup>Optional</sup> <a name="connection_profile_id_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```python
connection_profile_id_input: str
```

- *Type:* str

---

##### `create_without_validation_input`<sup>Optional</sup> <a name="create_without_validation_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```python
create_without_validation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `forward_ssh_connectivity_input`<sup>Optional</sup> <a name="forward_ssh_connectivity_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```python
forward_ssh_connectivity_input: GoogleDatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcs_profile_input`<sup>Optional</sup> <a name="gcs_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput"></a>

```python
gcs_profile_input: GoogleDatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mongodb_profile_input`<sup>Optional</sup> <a name="mongodb_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfileInput"></a>

```python
mongodb_profile_input: GoogleDatastreamConnectionProfileMongodbProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

---

##### `mysql_profile_input`<sup>Optional</sup> <a name="mysql_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput"></a>

```python
mysql_profile_input: GoogleDatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `oracle_profile_input`<sup>Optional</sup> <a name="oracle_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput"></a>

```python
oracle_profile_input: GoogleDatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `postgresql_profile_input`<sup>Optional</sup> <a name="postgresql_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```python
postgresql_profile_input: GoogleDatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `private_connectivity_input`<sup>Optional</sup> <a name="private_connectivity_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput"></a>

```python
private_connectivity_input: GoogleDatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `salesforce_profile_input`<sup>Optional</sup> <a name="salesforce_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfileInput"></a>

```python
salesforce_profile_input: GoogleDatastreamConnectionProfileSalesforceProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

---

##### `spanner_profile_input`<sup>Optional</sup> <a name="spanner_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfileInput"></a>

```python
spanner_profile_input: GoogleDatastreamConnectionProfileSpannerProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

---

##### `sql_server_profile_input`<sup>Optional</sup> <a name="sql_server_profile_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```python
sql_server_profile_input: GoogleDatastreamConnectionProfileSqlServerProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDatastreamConnectionProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

---

##### `create_without_validation`<sup>Required</sup> <a name="create_without_validation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation"></a>

```python
create_without_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamConnectionProfileBigqueryProfile <a name="GoogleDatastreamConnectionProfileBigqueryProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile()
```


### GoogleDatastreamConnectionProfileConfig <a name="GoogleDatastreamConnectionProfileConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_profile_id: str,
  display_name: str,
  location: str,
  bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfile = None,
  create_without_validation: bool | IResolvable = None,
  deletion_policy: str = None,
  forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity = None,
  gcs_profile: GoogleDatastreamConnectionProfileGcsProfile = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mongodb_profile: GoogleDatastreamConnectionProfileMongodbProfile = None,
  mysql_profile: GoogleDatastreamConnectionProfileMysqlProfile = None,
  oracle_profile: GoogleDatastreamConnectionProfileOracleProfile = None,
  postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfile = None,
  private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivity = None,
  project: str = None,
  salesforce_profile: GoogleDatastreamConnectionProfileSalesforceProfile = None,
  spanner_profile: GoogleDatastreamConnectionProfileSpannerProfile = None,
  sql_server_profile: GoogleDatastreamConnectionProfileSqlServerProfile = None,
  timeouts: GoogleDatastreamConnectionProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location">location</a></code> | <code>str</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation">create_without_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mongodbProfile">mongodb_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.salesforceProfile">salesforce_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | salesforce_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.spannerProfile">spanner_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | spanner_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile">sql_server_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `bigquery_profile`<sup>Optional</sup> <a name="bigquery_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```python
bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```python
create_without_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#create_without_validation GoogleDatastreamConnectionProfile#create_without_validation}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#deletion_policy GoogleDatastreamConnectionProfile#deletion_policy}

---

##### `forward_ssh_connectivity`<sup>Optional</sup> <a name="forward_ssh_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```python
forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcs_profile`<sup>Optional</sup> <a name="gcs_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile"></a>

```python
gcs_profile: GoogleDatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `mongodb_profile`<sup>Optional</sup> <a name="mongodb_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mongodbProfile"></a>

```python
mongodb_profile: GoogleDatastreamConnectionProfileMongodbProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#mongodb_profile GoogleDatastreamConnectionProfile#mongodb_profile}

---

##### `mysql_profile`<sup>Optional</sup> <a name="mysql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```python
mysql_profile: GoogleDatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `oracle_profile`<sup>Optional</sup> <a name="oracle_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile"></a>

```python
oracle_profile: GoogleDatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `postgresql_profile`<sup>Optional</sup> <a name="postgresql_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```python
postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `private_connectivity`<sup>Optional</sup> <a name="private_connectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```python
private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `salesforce_profile`<sup>Optional</sup> <a name="salesforce_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.salesforceProfile"></a>

```python
salesforce_profile: GoogleDatastreamConnectionProfileSalesforceProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

salesforce_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#salesforce_profile GoogleDatastreamConnectionProfile#salesforce_profile}

---

##### `spanner_profile`<sup>Optional</sup> <a name="spanner_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.spannerProfile"></a>

```python
spanner_profile: GoogleDatastreamConnectionProfileSpannerProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

spanner_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#spanner_profile GoogleDatastreamConnectionProfile#spanner_profile}

---

##### `sql_server_profile`<sup>Optional</sup> <a name="sql_server_profile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```python
sql_server_profile: GoogleDatastreamConnectionProfileSqlServerProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#sql_server_profile GoogleDatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleDatastreamConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

### GoogleDatastreamConnectionProfileForwardSshConnectivity <a name="GoogleDatastreamConnectionProfileForwardSshConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>str</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>str</code> | SSH password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey">private_key</a></code> | <code>str</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```python
password: str
```

- *Type:* str

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

### GoogleDatastreamConnectionProfileGcsProfile <a name="GoogleDatastreamConnectionProfileGcsProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile(
  bucket: str,
  root_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>str</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath">root_path</a></code> | <code>str</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

##### `root_path`<sup>Optional</sup> <a name="root_path" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```python
root_path: str
```

- *Type:* str

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

### GoogleDatastreamConnectionProfileMongodbProfile <a name="GoogleDatastreamConnectionProfileMongodbProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile(
  host_addresses: IResolvable | typing.List[GoogleDatastreamConnectionProfileMongodbProfileHostAddresses],
  username: str,
  password: str = None,
  replica_set: str = None,
  secret_manager_stored_password: str = None,
  srv_connection_format: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat = None,
  ssl_config: GoogleDatastreamConnectionProfileMongodbProfileSslConfig = None,
  standard_connection_format: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.hostAddresses">host_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]</code> | host_addresses block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.username">username</a></code> | <code>str</code> | Username for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.password">password</a></code> | <code>str</code> | Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.replicaSet">replica_set</a></code> | <code>str</code> | Name of the replica set. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat">srv_connection_format</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | srv_connection_format block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a></code> | ssl_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat">standard_connection_format</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | standard_connection_format block. |

---

##### `host_addresses`<sup>Required</sup> <a name="host_addresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.hostAddresses"></a>

```python
host_addresses: IResolvable | typing.List[GoogleDatastreamConnectionProfileMongodbProfileHostAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]

host_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#host_addresses GoogleDatastreamConnectionProfile#host_addresses}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the MongoDB connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `replica_set`<sup>Optional</sup> <a name="replica_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.replicaSet"></a>

```python
replica_set: str
```

- *Type:* str

Name of the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#replica_set GoogleDatastreamConnectionProfile#replica_set}

---

##### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `srv_connection_format`<sup>Optional</sup> <a name="srv_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat"></a>

```python
srv_connection_format: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

srv_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#srv_connection_format GoogleDatastreamConnectionProfile#srv_connection_format}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfileMongodbProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

##### `standard_connection_format`<sup>Optional</sup> <a name="standard_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat"></a>

```python
standard_connection_format: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

standard_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#standard_connection_format GoogleDatastreamConnectionProfile#standard_connection_format}

---

### GoogleDatastreamConnectionProfileMongodbProfileHostAddresses <a name="GoogleDatastreamConnectionProfileMongodbProfileHostAddresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses(
  hostname: str,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the connection. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat <a name="GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat()
```


### GoogleDatastreamConnectionProfileMongodbProfileSslConfig <a name="GoogleDatastreamConnectionProfileMongodbProfileSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None,
  secret_manager_stored_client_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded private key associated with the Client Certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey">secret_manager_stored_client_key</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey. |

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

##### `secret_manager_stored_client_key`<sup>Optional</sup> <a name="secret_manager_stored_client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey"></a>

```python
secret_manager_stored_client_key: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_key GoogleDatastreamConnectionProfile#secret_manager_stored_client_key}

---

### GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat <a name="GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat(
  direct_connection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection">direct_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the client connects directly to the host[:port] in the connection URI. |

---

##### `direct_connection`<sup>Optional</sup> <a name="direct_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection"></a>

```python
direct_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the client connects directly to the host[:port] in the connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#direct_connection GoogleDatastreamConnectionProfile#direct_connection}

---

### GoogleDatastreamConnectionProfileMysqlProfile <a name="GoogleDatastreamConnectionProfileMysqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None,
  ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>str</code> | Username for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>str</code> | Password for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfileMysqlProfileSslConfig <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfileOracleProfile <a name="GoogleDatastreamConnectionProfileOracleProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile(
  database_service: str,
  hostname: str,
  username: str,
  connection_attributes: typing.Mapping[str] = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService">database_service</a></code> | <code>str</code> | Database for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>str</code> | Username for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes">connection_attributes</a></code> | <code>typing.Mapping[str]</code> | Connection string attributes. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>str</code> | Password for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```python
database_service: str
```

- *Type:* str

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `connection_attributes`<sup>Optional</sup> <a name="connection_attributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```python
connection_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

### GoogleDatastreamConnectionProfilePostgresqlProfile <a name="GoogleDatastreamConnectionProfilePostgresqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile(
  database: str,
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None,
  ssl_config: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>str</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>str</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>str</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```python
database: str
```

- *Type:* str

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig(
  server_and_client_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification = None,
  server_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification">server_and_client_verification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | server_and_client_verification block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification">server_verification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | server_verification block. |

---

##### `server_and_client_verification`<sup>Optional</sup> <a name="server_and_client_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification"></a>

```python
server_and_client_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

server_and_client_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#server_and_client_verification GoogleDatastreamConnectionProfile#server_and_client_verification}

---

##### `server_verification`<sup>Optional</sup> <a name="server_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification"></a>

```python
server_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

server_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#server_verification GoogleDatastreamConnectionProfile#server_verification}

---

### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification(
  ca_certificate: str,
  client_certificate: str,
  client_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM-encoded server root CA certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded private key associated with the client certificate. |

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded private key associated with the client certificate.

This value will be used during the SSL/TLS handshake, allowing
the PostgreSQL server to authenticate the client's identity,
i.e. identity of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification(
  ca_certificate: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM-encoded server root CA certificate. |

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

### GoogleDatastreamConnectionProfilePrivateConnectivity <a name="GoogleDatastreamConnectionProfilePrivateConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity(
  private_connection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection">private_connection</a></code> | <code>str</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```python
private_connection: str
```

- *Type:* str

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

### GoogleDatastreamConnectionProfileSalesforceProfile <a name="GoogleDatastreamConnectionProfileSalesforceProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile(
  domain: str,
  oauth2_client_credentials: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials = None,
  user_credentials: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.domain">domain</a></code> | <code>str</code> | Domain for the Salesforce Org. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.oauth2ClientCredentials">oauth2_client_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.userCredentials">user_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a></code> | user_credentials block. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain for the Salesforce Org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#domain GoogleDatastreamConnectionProfile#domain}

---

##### `oauth2_client_credentials`<sup>Optional</sup> <a name="oauth2_client_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.oauth2ClientCredentials"></a>

```python
oauth2_client_credentials: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#oauth2_client_credentials GoogleDatastreamConnectionProfile#oauth2_client_credentials}

---

##### `user_credentials`<sup>Optional</sup> <a name="user_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.userCredentials"></a>

```python
user_credentials: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#user_credentials GoogleDatastreamConnectionProfile#user_credentials}

---

### GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials <a name="GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials(
  client_id: str = None,
  client_secret: str = None,
  secret_manager_stored_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | Client ID to use for authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | Client secret to use for authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.secretManagerStoredClientSecret">secret_manager_stored_client_secret</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the client secret. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client ID to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_id GoogleDatastreamConnectionProfile#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Client secret to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_secret GoogleDatastreamConnectionProfile#client_secret}

---

##### `secret_manager_stored_client_secret`<sup>Optional</sup> <a name="secret_manager_stored_client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.secretManagerStoredClientSecret"></a>

```python
secret_manager_stored_client_secret: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_secret GoogleDatastreamConnectionProfile#secret_manager_stored_client_secret}

---

### GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials <a name="GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials(
  password: str = None,
  secret_manager_stored_password: str = None,
  secret_manager_stored_security_token: str = None,
  security_token: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.password">password</a></code> | <code>str</code> | Password of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredSecurityToken">secret_manager_stored_security_token</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the user's security token. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.securityToken">security_token</a></code> | <code>str</code> | Security token of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.username">username</a></code> | <code>str</code> | Username to use for authentication. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `secret_manager_stored_security_token`<sup>Optional</sup> <a name="secret_manager_stored_security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredSecurityToken"></a>

```python
secret_manager_stored_security_token: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the user's security token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_security_token GoogleDatastreamConnectionProfile#secret_manager_stored_security_token}

---

##### `security_token`<sup>Optional</sup> <a name="security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

Security token of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#security_token GoogleDatastreamConnectionProfile#security_token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

Username to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

### GoogleDatastreamConnectionProfileSpannerProfile <a name="GoogleDatastreamConnectionProfileSpannerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile(
  database: str,
  host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.database">database</a></code> | <code>str</code> | The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.host">host</a></code> | <code>str</code> | The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.database"></a>

```python
database: str
```

- *Type:* str

The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.host"></a>

```python
host: str
```

- *Type:* str

The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#host GoogleDatastreamConnectionProfile#host}

---

### GoogleDatastreamConnectionProfileSqlServerProfile <a name="GoogleDatastreamConnectionProfileSqlServerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile(
  database: str,
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  secret_manager_stored_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database">database</a></code> | <code>str</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username">username</a></code> | <code>str</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password">password</a></code> | <code>str</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database"></a>

```python
database: str
```

- *Type:* str

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

### GoogleDatastreamConnectionProfileTimeouts <a name="GoogleDatastreamConnectionProfileTimeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamConnectionProfileBigqueryProfileOutputReference <a name="GoogleDatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---


### GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---


### GoogleDatastreamConnectionProfileGcsProfileOutputReference <a name="GoogleDatastreamConnectionProfileGcsProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">reset_root_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_path` <a name="reset_root_path" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```python
def reset_root_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">root_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">root_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `root_path_input`<sup>Optional</sup> <a name="root_path_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```python
root_path_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `root_path`<sup>Required</sup> <a name="root_path" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```python
root_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList <a name="GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDatastreamConnectionProfileMongodbProfileHostAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]

---


### GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDatastreamConnectionProfileMongodbProfileHostAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses">put_host_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat">put_srv_connection_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat">put_standard_connection_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet">reset_replica_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword">reset_secret_manager_stored_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat">reset_srv_connection_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat">reset_standard_connection_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_host_addresses` <a name="put_host_addresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses"></a>

```python
def put_host_addresses(
  value: IResolvable | typing.List[GoogleDatastreamConnectionProfileMongodbProfileHostAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]

---

##### `put_srv_connection_format` <a name="put_srv_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat"></a>

```python
def put_srv_connection_format() -> None
```

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None,
  secret_manager_stored_client_key: str = None
) -> None
```

###### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.caCertificate"></a>

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.clientKey"></a>

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

###### `secret_manager_stored_client_key`<sup>Optional</sup> <a name="secret_manager_stored_client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.secretManagerStoredClientKey"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_key GoogleDatastreamConnectionProfile#secret_manager_stored_client_key}

---

##### `put_standard_connection_format` <a name="put_standard_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat"></a>

```python
def put_standard_connection_format(
  direct_connection: bool | IResolvable = None
) -> None
```

###### `direct_connection`<sup>Optional</sup> <a name="direct_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat.parameter.directConnection"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the client connects directly to the host[:port] in the connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#direct_connection GoogleDatastreamConnectionProfile#direct_connection}

---

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_replica_set` <a name="reset_replica_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet"></a>

```python
def reset_replica_set() -> None
```

##### `reset_secret_manager_stored_password` <a name="reset_secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword"></a>

```python
def reset_secret_manager_stored_password() -> None
```

##### `reset_srv_connection_format` <a name="reset_srv_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat"></a>

```python
def reset_srv_connection_format() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```

##### `reset_standard_connection_format` <a name="reset_standard_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat"></a>

```python
def reset_standard_connection_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses">host_addresses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList">GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat">srv_connection_format</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat">standard_connection_format</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput">host_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput">replica_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput">secret_manager_stored_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput">srv_connection_format_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput">standard_connection_format_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet">replica_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_addresses`<sup>Required</sup> <a name="host_addresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses"></a>

```python
host_addresses: GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList">GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList</a>

---

##### `srv_connection_format`<sup>Required</sup> <a name="srv_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat"></a>

```python
srv_connection_format: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a>

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a>

---

##### `standard_connection_format`<sup>Required</sup> <a name="standard_connection_format" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat"></a>

```python
standard_connection_format: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a>

---

##### `host_addresses_input`<sup>Optional</sup> <a name="host_addresses_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput"></a>

```python
host_addresses_input: IResolvable | typing.List[GoogleDatastreamConnectionProfileMongodbProfileHostAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `replica_set_input`<sup>Optional</sup> <a name="replica_set_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput"></a>

```python
replica_set_input: str
```

- *Type:* str

---

##### `secret_manager_stored_password_input`<sup>Optional</sup> <a name="secret_manager_stored_password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```python
secret_manager_stored_password_input: str
```

- *Type:* str

---

##### `srv_connection_format_input`<sup>Optional</sup> <a name="srv_connection_format_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput"></a>

```python
srv_connection_format_input: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: GoogleDatastreamConnectionProfileMongodbProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `standard_connection_format_input`<sup>Optional</sup> <a name="standard_connection_format_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput"></a>

```python
standard_connection_format_input: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `replica_set`<sup>Required</sup> <a name="replica_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet"></a>

```python
replica_set: str
```

- *Type:* str

---

##### `secret_manager_stored_password`<sup>Required</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMongodbProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey">reset_secret_manager_stored_client_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_secret_manager_stored_client_key` <a name="reset_secret_manager_stored_client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey"></a>

```python
def reset_secret_manager_stored_client_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet">ca_certificate_set</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet">client_certificate_set</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet">client_key_set</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput">secret_manager_stored_client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey">secret_manager_stored_client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_set`<sup>Required</sup> <a name="ca_certificate_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet"></a>

```python
ca_certificate_set: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `client_certificate_set`<sup>Required</sup> <a name="client_certificate_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```python
client_certificate_set: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `client_key_set`<sup>Required</sup> <a name="client_key_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet"></a>

```python
client_key_set: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `secret_manager_stored_client_key_input`<sup>Optional</sup> <a name="secret_manager_stored_client_key_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput"></a>

```python
secret_manager_stored_client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `secret_manager_stored_client_key`<sup>Required</sup> <a name="secret_manager_stored_client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey"></a>

```python
secret_manager_stored_client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMongodbProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection">reset_direct_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direct_connection` <a name="reset_direct_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection"></a>

```python
def reset_direct_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput">direct_connection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection">direct_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct_connection_input`<sup>Optional</sup> <a name="direct_connection_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput"></a>

```python
direct_connection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `direct_connection`<sup>Required</sup> <a name="direct_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection"></a>

```python
direct_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword">reset_secret_manager_stored_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None
) -> None
```

###### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.caCertificate"></a>

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.clientKey"></a>

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_secret_manager_stored_password` <a name="reset_secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```python
def reset_secret_manager_stored_password() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput">secret_manager_stored_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password_input`<sup>Optional</sup> <a name="secret_manager_stored_password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```python
secret_manager_stored_password_input: str
```

- *Type:* str

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: GoogleDatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password`<sup>Required</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">ca_certificate_set</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">client_certificate_set</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">client_key_set</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_set`<sup>Required</sup> <a name="ca_certificate_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```python
ca_certificate_set: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `client_certificate_set`<sup>Required</sup> <a name="client_certificate_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```python
client_certificate_set: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `client_key_set`<sup>Required</sup> <a name="client_key_set" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```python
client_key_set: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileOracleProfileOutputReference <a name="GoogleDatastreamConnectionProfileOracleProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">reset_connection_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword">reset_secret_manager_stored_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_attributes` <a name="reset_connection_attributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```python
def reset_connection_attributes() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_secret_manager_stored_password` <a name="reset_secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword"></a>

```python
def reset_secret_manager_stored_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connection_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">database_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput">secret_manager_stored_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connection_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">database_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_attributes_input`<sup>Optional</sup> <a name="connection_attributes_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```python
connection_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_service_input`<sup>Optional</sup> <a name="database_service_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```python
database_service_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password_input`<sup>Optional</sup> <a name="secret_manager_stored_password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```python
secret_manager_stored_password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `connection_attributes`<sup>Required</sup> <a name="connection_attributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```python
connection_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```python
database_service: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password`<sup>Required</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword">reset_secret_manager_stored_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  server_and_client_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification = None,
  server_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification = None
) -> None
```

###### `server_and_client_verification`<sup>Optional</sup> <a name="server_and_client_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig.parameter.serverAndClientVerification"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

server_and_client_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#server_and_client_verification GoogleDatastreamConnectionProfile#server_and_client_verification}

---

###### `server_verification`<sup>Optional</sup> <a name="server_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig.parameter.serverVerification"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

server_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#server_verification GoogleDatastreamConnectionProfile#server_verification}

---

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_secret_manager_stored_password` <a name="reset_secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```python
def reset_secret_manager_stored_password() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput">secret_manager_stored_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password_input`<sup>Optional</sup> <a name="secret_manager_stored_password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```python
secret_manager_stored_password_input: str
```

- *Type:* str

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password`<sup>Required</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification">put_server_and_client_verification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification">put_server_verification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification">reset_server_and_client_verification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification">reset_server_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_and_client_verification` <a name="put_server_and_client_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification"></a>

```python
def put_server_and_client_verification(
  ca_certificate: str,
  client_certificate: str,
  client_key: str
) -> None
```

###### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.caCertificate"></a>

- *Type:* str

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

###### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.clientKey"></a>

- *Type:* str

PEM-encoded private key associated with the client certificate.

This value will be used during the SSL/TLS handshake, allowing
the PostgreSQL server to authenticate the client's identity,
i.e. identity of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

##### `put_server_verification` <a name="put_server_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification"></a>

```python
def put_server_verification(
  ca_certificate: str
) -> None
```

###### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification.parameter.caCertificate"></a>

- *Type:* str

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `reset_server_and_client_verification` <a name="reset_server_and_client_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification"></a>

```python
def reset_server_and_client_verification() -> None
```

##### `reset_server_verification` <a name="reset_server_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification"></a>

```python
def reset_server_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification">server_and_client_verification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification">server_verification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput">server_and_client_verification_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput">server_verification_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_and_client_verification`<sup>Required</sup> <a name="server_and_client_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification"></a>

```python
server_and_client_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a>

---

##### `server_verification`<sup>Required</sup> <a name="server_verification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification"></a>

```python
server_verification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a>

---

##### `server_and_client_verification_input`<sup>Optional</sup> <a name="server_and_client_verification_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput"></a>

```python
server_and_client_verification_input: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `server_verification_input`<sup>Optional</sup> <a name="server_verification_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput"></a>

```python
server_verification_input: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---


### GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference <a name="GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">private_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">private_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_connection_input`<sup>Optional</sup> <a name="private_connection_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```python
private_connection_input: str
```

- *Type:* str

---

##### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```python
private_connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---


### GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference <a name="GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetSecretManagerStoredClientSecret">reset_secret_manager_stored_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_secret_manager_stored_client_secret` <a name="reset_secret_manager_stored_client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetSecretManagerStoredClientSecret"></a>

```python
def reset_secret_manager_stored_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecretInput">secret_manager_stored_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecret">secret_manager_stored_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `secret_manager_stored_client_secret_input`<sup>Optional</sup> <a name="secret_manager_stored_client_secret_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecretInput"></a>

```python
secret_manager_stored_client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `secret_manager_stored_client_secret`<sup>Required</sup> <a name="secret_manager_stored_client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecret"></a>

```python
secret_manager_stored_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

---


### GoogleDatastreamConnectionProfileSalesforceProfileOutputReference <a name="GoogleDatastreamConnectionProfileSalesforceProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials">put_oauth2_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials">put_user_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetOauth2ClientCredentials">reset_oauth2_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetUserCredentials">reset_user_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth2_client_credentials` <a name="put_oauth2_client_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials"></a>

```python
def put_oauth2_client_credentials(
  client_id: str = None,
  client_secret: str = None,
  secret_manager_stored_client_secret: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials.parameter.clientId"></a>

- *Type:* str

Client ID to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_id GoogleDatastreamConnectionProfile#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials.parameter.clientSecret"></a>

- *Type:* str

Client secret to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#client_secret GoogleDatastreamConnectionProfile#client_secret}

---

###### `secret_manager_stored_client_secret`<sup>Optional</sup> <a name="secret_manager_stored_client_secret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials.parameter.secretManagerStoredClientSecret"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_secret GoogleDatastreamConnectionProfile#secret_manager_stored_client_secret}

---

##### `put_user_credentials` <a name="put_user_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials"></a>

```python
def put_user_credentials(
  password: str = None,
  secret_manager_stored_password: str = None,
  secret_manager_stored_security_token: str = None,
  security_token: str = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials.parameter.password"></a>

- *Type:* str

Password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `secret_manager_stored_password`<sup>Optional</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials.parameter.secretManagerStoredPassword"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

###### `secret_manager_stored_security_token`<sup>Optional</sup> <a name="secret_manager_stored_security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials.parameter.secretManagerStoredSecurityToken"></a>

- *Type:* str

A reference to a Secret Manager resource name storing the user's security token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_security_token GoogleDatastreamConnectionProfile#secret_manager_stored_security_token}

---

###### `security_token`<sup>Optional</sup> <a name="security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials.parameter.securityToken"></a>

- *Type:* str

Security token of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#security_token GoogleDatastreamConnectionProfile#security_token}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials.parameter.username"></a>

- *Type:* str

Username to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `reset_oauth2_client_credentials` <a name="reset_oauth2_client_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetOauth2ClientCredentials"></a>

```python
def reset_oauth2_client_credentials() -> None
```

##### `reset_user_credentials` <a name="reset_user_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetUserCredentials"></a>

```python
def reset_user_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentials">oauth2_client_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentials">user_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentialsInput">oauth2_client_credentials_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentialsInput">user_credentials_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2_client_credentials`<sup>Required</sup> <a name="oauth2_client_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentials"></a>

```python
oauth2_client_credentials: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference</a>

---

##### `user_credentials`<sup>Required</sup> <a name="user_credentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentials"></a>

```python
user_credentials: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `oauth2_client_credentials_input`<sup>Optional</sup> <a name="oauth2_client_credentials_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentialsInput"></a>

```python
oauth2_client_credentials_input: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

---

##### `user_credentials_input`<sup>Optional</sup> <a name="user_credentials_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentialsInput"></a>

```python
user_credentials_input: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileSalesforceProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

---


### GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference <a name="GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredPassword">reset_secret_manager_stored_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredSecurityToken">reset_secret_manager_stored_security_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecurityToken">reset_security_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_secret_manager_stored_password` <a name="reset_secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredPassword"></a>

```python
def reset_secret_manager_stored_password() -> None
```

##### `reset_secret_manager_stored_security_token` <a name="reset_secret_manager_stored_security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredSecurityToken"></a>

```python
def reset_secret_manager_stored_security_token() -> None
```

##### `reset_security_token` <a name="reset_security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecurityToken"></a>

```python
def reset_security_token() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPasswordInput">secret_manager_stored_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityTokenInput">secret_manager_stored_security_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityTokenInput">security_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityToken">secret_manager_stored_security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityToken">security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `secret_manager_stored_password_input`<sup>Optional</sup> <a name="secret_manager_stored_password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPasswordInput"></a>

```python
secret_manager_stored_password_input: str
```

- *Type:* str

---

##### `secret_manager_stored_security_token_input`<sup>Optional</sup> <a name="secret_manager_stored_security_token_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityTokenInput"></a>

```python
secret_manager_stored_security_token_input: str
```

- *Type:* str

---

##### `security_token_input`<sup>Optional</sup> <a name="security_token_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityTokenInput"></a>

```python
security_token_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `secret_manager_stored_password`<sup>Required</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

---

##### `secret_manager_stored_security_token`<sup>Required</sup> <a name="secret_manager_stored_security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityToken"></a>

```python
secret_manager_stored_security_token: str
```

- *Type:* str

---

##### `security_token`<sup>Required</sup> <a name="security_token" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

---


### GoogleDatastreamConnectionProfileSpannerProfileOutputReference <a name="GoogleDatastreamConnectionProfileSpannerProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resetHost">reset_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resetHost"></a>

```python
def reset_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileSpannerProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

---


### GoogleDatastreamConnectionProfileSqlServerProfileOutputReference <a name="GoogleDatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword">reset_secret_manager_stored_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_secret_manager_stored_password` <a name="reset_secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword"></a>

```python
def reset_secret_manager_stored_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput">secret_manager_stored_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword">secret_manager_stored_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password_input`<sup>Optional</sup> <a name="secret_manager_stored_password_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```python
secret_manager_stored_password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_manager_stored_password`<sup>Required</sup> <a name="secret_manager_stored_password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword"></a>

```python
secret_manager_stored_password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileSqlServerProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---


### GoogleDatastreamConnectionProfileTimeoutsOutputReference <a name="GoogleDatastreamConnectionProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDatastreamConnectionProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---



