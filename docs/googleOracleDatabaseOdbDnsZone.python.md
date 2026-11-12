# `googleOracleDatabaseOdbDnsZone` Submodule <a name="`googleOracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseOdbDnsZone <a name="GoogleOracleDatabaseOdbDnsZone" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain: str,
  location: str,
  odb_dns_zone_id: str,
  odbnetwork: str,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleOracleDatabaseOdbDnsZoneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbDnsZoneId">odb_dns_zone_id</a></code> | <code>str</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbnetwork">odbnetwork</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#id GoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#project GoogleOracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.domain"></a>

- *Type:* str

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#domain GoogleOracleDatabaseOdbDnsZone#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#location GoogleOracleDatabaseOdbDnsZone#location}

---

##### `odb_dns_zone_id`<sup>Required</sup> <a name="odb_dns_zone_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbDnsZoneId"></a>

- *Type:* str

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#odb_dns_zone_id GoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.odbnetwork"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#odbnetwork GoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#deletion_policy GoogleOracleDatabaseOdbDnsZone#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#deletion_protection GoogleOracleDatabaseOdbDnsZone#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#id GoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#labels GoogleOracleDatabaseOdbDnsZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#project GoogleOracleDatabaseOdbDnsZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#timeouts GoogleOracleDatabaseOdbDnsZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#create GoogleOracleDatabaseOdbDnsZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#delete GoogleOracleDatabaseOdbDnsZone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#update GoogleOracleDatabaseOdbDnsZone#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOracleDatabaseOdbDnsZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference">GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">odb_dns_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput">odbnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId">odb_dns_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetwork">odbnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference">GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `odb_dns_zone_id_input`<sup>Optional</sup> <a name="odb_dns_zone_id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```python
odb_dns_zone_id_input: str
```

- *Type:* str

---

##### `odbnetwork_input`<sup>Optional</sup> <a name="odbnetwork_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```python
odbnetwork_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleOracleDatabaseOdbDnsZoneTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `odb_dns_zone_id`<sup>Required</sup> <a name="odb_dns_zone_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```python
odb_dns_zone_id: str
```

- *Type:* str

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```python
odbnetwork: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseOdbDnsZoneConfig <a name="GoogleOracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain: str,
  location: str,
  odb_dns_zone_id: str,
  odbnetwork: str,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleOracleDatabaseOdbDnsZoneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.domain">domain</a></code> | <code>str</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">odb_dns_zone_id</a></code> | <code>str</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork">odbnetwork</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#id GoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#project GoogleOracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#domain GoogleOracleDatabaseOdbDnsZone#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#location GoogleOracleDatabaseOdbDnsZone#location}

---

##### `odb_dns_zone_id`<sup>Required</sup> <a name="odb_dns_zone_id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```python
odb_dns_zone_id: str
```

- *Type:* str

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#odb_dns_zone_id GoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```python
odbnetwork: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#odbnetwork GoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#deletion_policy GoogleOracleDatabaseOdbDnsZone#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#deletion_protection GoogleOracleDatabaseOdbDnsZone#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#id GoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#labels GoogleOracleDatabaseOdbDnsZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#project GoogleOracleDatabaseOdbDnsZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseOdbDnsZoneTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#timeouts GoogleOracleDatabaseOdbDnsZone#timeouts}

---

### GoogleOracleDatabaseOdbDnsZoneTimeouts <a name="GoogleOracleDatabaseOdbDnsZoneTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#create GoogleOracleDatabaseOdbDnsZone#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#delete GoogleOracleDatabaseOdbDnsZone#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#update GoogleOracleDatabaseOdbDnsZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#create GoogleOracleDatabaseOdbDnsZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#delete GoogleOracleDatabaseOdbDnsZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#update GoogleOracleDatabaseOdbDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference <a name="GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_odb_dns_zone

googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleOracleDatabaseOdbDnsZoneTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a>

---



