# `googleDataplexDataProduct` Submodule <a name="`googleDataplexDataProduct` Submodule" id="@cdktn/provider-google-beta.googleDataplexDataProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDataProduct <a name="GoogleDataplexDataProduct" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product google_dataplex_data_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProduct(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_product_id: str,
  display_name: str,
  location: str,
  owner_emails: typing.List[str],
  access_approval_config: GoogleDataplexDataProductAccessApprovalConfig = None,
  access_groups: IResolvable | typing.List[GoogleDataplexDataProductAccessGroups] = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexDataProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dataProductId">data_product_id</a></code> | <code>str</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.ownerEmails">owner_emails</a></code> | <code>typing.List[str]</code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessApprovalConfig">access_approval_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessGroups">access_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]</code> | access_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.dataProductId"></a>

- *Type:* str

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#data_product_id GoogleDataplexDataProduct#data_product_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#display_name GoogleDataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.location"></a>

- *Type:* str

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#location GoogleDataplexDataProduct#location}

---

##### `owner_emails`<sup>Required</sup> <a name="owner_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.ownerEmails"></a>

- *Type:* typing.List[str]

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#owner_emails GoogleDataplexDataProduct#owner_emails}

---

##### `access_approval_config`<sup>Optional</sup> <a name="access_approval_config" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessApprovalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#access_approval_config GoogleDataplexDataProduct#access_approval_config}

---

##### `access_groups`<sup>Optional</sup> <a name="access_groups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.accessGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#access_groups GoogleDataplexDataProduct#access_groups}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#deletion_policy GoogleDataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.description"></a>

- *Type:* str

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#description GoogleDataplexDataProduct#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#labels GoogleDataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#timeouts GoogleDataplexDataProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessApprovalConfig">put_access_approval_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessGroups">put_access_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessApprovalConfig">reset_access_approval_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessGroups">reset_access_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_approval_config` <a name="put_access_approval_config" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessApprovalConfig"></a>

```python
def put_access_approval_config(
  approver_emails: typing.List[str] = None
) -> None
```

###### `approver_emails`<sup>Optional</sup> <a name="approver_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessApprovalConfig.parameter.approverEmails"></a>

- *Type:* typing.List[str]

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#approver_emails GoogleDataplexDataProduct#approver_emails}

---

##### `put_access_groups` <a name="put_access_groups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessGroups"></a>

```python
def put_access_groups(
  value: IResolvable | typing.List[GoogleDataplexDataProductAccessGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putAccessGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#create GoogleDataplexDataProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#delete GoogleDataplexDataProduct#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#update GoogleDataplexDataProduct#update}.

---

##### `reset_access_approval_config` <a name="reset_access_approval_config" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessApprovalConfig"></a>

```python
def reset_access_approval_config() -> None
```

##### `reset_access_groups` <a name="reset_access_groups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetAccessGroups"></a>

```python
def reset_access_groups() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDataplexDataProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDataplexDataProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexDataProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexDataProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDataProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfig">access_approval_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference">GoogleDataplexDataProductAccessApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroups">access_groups</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList">GoogleDataplexDataProductAccessGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.assetCount">asset_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference">GoogleDataplexDataProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfigInput">access_approval_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroupsInput">access_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductIdInput">data_product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmailsInput">owner_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductId">data_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmails">owner_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_approval_config`<sup>Required</sup> <a name="access_approval_config" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfig"></a>

```python
access_approval_config: GoogleDataplexDataProductAccessApprovalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference">GoogleDataplexDataProductAccessApprovalConfigOutputReference</a>

---

##### `access_groups`<sup>Required</sup> <a name="access_groups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroups"></a>

```python
access_groups: GoogleDataplexDataProductAccessGroupsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList">GoogleDataplexDataProductAccessGroupsList</a>

---

##### `asset_count`<sup>Required</sup> <a name="asset_count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.assetCount"></a>

```python
asset_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeouts"></a>

```python
timeouts: GoogleDataplexDataProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference">GoogleDataplexDataProductTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_approval_config_input`<sup>Optional</sup> <a name="access_approval_config_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessApprovalConfigInput"></a>

```python
access_approval_config_input: GoogleDataplexDataProductAccessApprovalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

---

##### `access_groups_input`<sup>Optional</sup> <a name="access_groups_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.accessGroupsInput"></a>

```python
access_groups_input: IResolvable | typing.List[GoogleDataplexDataProductAccessGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]

---

##### `data_product_id_input`<sup>Optional</sup> <a name="data_product_id_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductIdInput"></a>

```python
data_product_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `owner_emails_input`<sup>Optional</sup> <a name="owner_emails_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmailsInput"></a>

```python
owner_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDataplexDataProductTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.dataProductId"></a>

```python
data_product_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `owner_emails`<sup>Required</sup> <a name="owner_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.ownerEmails"></a>

```python
owner_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDataProductAccessApprovalConfig <a name="GoogleDataplexDataProductAccessApprovalConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig(
  approver_emails: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig.property.approverEmails">approver_emails</a></code> | <code>typing.List[str]</code> | Specifies the email addresses of users who are potential approvers. |

---

##### `approver_emails`<sup>Optional</sup> <a name="approver_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig.property.approverEmails"></a>

```python
approver_emails: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#approver_emails GoogleDataplexDataProduct#approver_emails}

---

### GoogleDataplexDataProductAccessGroups <a name="GoogleDataplexDataProductAccessGroups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups(
  display_name: str,
  group_id: str,
  id: str,
  principal: GoogleDataplexDataProductAccessGroupsPrincipal,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.groupId">group_id</a></code> | <code>str</code> | Unique identifier of the access group. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a></code> | principal block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.description">description</a></code> | <code>str</code> | Description of the access group. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#display_name GoogleDataplexDataProduct#display_name}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Unique identifier of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#group_id GoogleDataplexDataProduct#group_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.principal"></a>

```python
principal: GoogleDataplexDataProductAccessGroupsPrincipal
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#principal GoogleDataplexDataProduct#principal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#description GoogleDataplexDataProduct#description}

---

### GoogleDataplexDataProductAccessGroupsPrincipal <a name="GoogleDataplexDataProductAccessGroupsPrincipal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal(
  google_group: str = None,
  service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.googleGroup">google_group</a></code> | <code>str</code> | Email of the Google Group. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.serviceAccount">service_account</a></code> | <code>str</code> | Specifies the email of the producer service account. |

---

##### `google_group`<sup>Optional</sup> <a name="google_group" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.googleGroup"></a>

```python
google_group: str
```

- *Type:* str

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#google_group GoogleDataplexDataProduct#google_group}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#service_account GoogleDataplexDataProduct#service_account}

---

### GoogleDataplexDataProductConfig <a name="GoogleDataplexDataProductConfig" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_product_id: str,
  display_name: str,
  location: str,
  owner_emails: typing.List[str],
  access_approval_config: GoogleDataplexDataProductAccessApprovalConfig = None,
  access_groups: IResolvable | typing.List[GoogleDataplexDataProductAccessGroups] = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexDataProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dataProductId">data_product_id</a></code> | <code>str</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.location">location</a></code> | <code>str</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.ownerEmails">owner_emails</a></code> | <code>typing.List[str]</code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessApprovalConfig">access_approval_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessGroups">access_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]</code> | access_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.description">description</a></code> | <code>str</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.dataProductId"></a>

```python
data_product_id: str
```

- *Type:* str

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#data_product_id GoogleDataplexDataProduct#data_product_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#display_name GoogleDataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#location GoogleDataplexDataProduct#location}

---

##### `owner_emails`<sup>Required</sup> <a name="owner_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.ownerEmails"></a>

```python
owner_emails: typing.List[str]
```

- *Type:* typing.List[str]

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#owner_emails GoogleDataplexDataProduct#owner_emails}

---

##### `access_approval_config`<sup>Optional</sup> <a name="access_approval_config" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessApprovalConfig"></a>

```python
access_approval_config: GoogleDataplexDataProductAccessApprovalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#access_approval_config GoogleDataplexDataProduct#access_approval_config}

---

##### `access_groups`<sup>Optional</sup> <a name="access_groups" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.accessGroups"></a>

```python
access_groups: IResolvable | typing.List[GoogleDataplexDataProductAccessGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#access_groups GoogleDataplexDataProduct#access_groups}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#deletion_policy GoogleDataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#description GoogleDataplexDataProduct#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#id GoogleDataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#labels GoogleDataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#project GoogleDataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexDataProductTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#timeouts GoogleDataplexDataProduct#timeouts}

---

### GoogleDataplexDataProductTimeouts <a name="GoogleDataplexDataProductTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#create GoogleDataplexDataProduct#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#delete GoogleDataplexDataProduct#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#update GoogleDataplexDataProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#create GoogleDataplexDataProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#delete GoogleDataplexDataProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#update GoogleDataplexDataProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDataProductAccessApprovalConfigOutputReference <a name="GoogleDataplexDataProductAccessApprovalConfigOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails">reset_approver_emails</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approver_emails` <a name="reset_approver_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails"></a>

```python
def reset_approver_emails() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput">approver_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails">approver_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approver_emails_input`<sup>Optional</sup> <a name="approver_emails_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput"></a>

```python
approver_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approver_emails`<sup>Required</sup> <a name="approver_emails" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails"></a>

```python
approver_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDataProductAccessApprovalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessApprovalConfig">GoogleDataplexDataProductAccessApprovalConfig</a>

---


### GoogleDataplexDataProductAccessGroupsList <a name="GoogleDataplexDataProductAccessGroupsList" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexDataProductAccessGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataplexDataProductAccessGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>]

---


### GoogleDataplexDataProductAccessGroupsOutputReference <a name="GoogleDataplexDataProductAccessGroupsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal"></a>

```python
def put_principal(
  google_group: str = None,
  service_account: str = None
) -> None
```

###### `google_group`<sup>Optional</sup> <a name="google_group" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.googleGroup"></a>

- *Type:* str

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#google_group GoogleDataplexDataProduct#google_group}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.serviceAccount"></a>

- *Type:* str

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product#service_account GoogleDataplexDataProduct#service_account}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference">GoogleDataplexDataProductAccessGroupsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principalInput">principal_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principal"></a>

```python
principal: GoogleDataplexDataProductAccessGroupsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference">GoogleDataplexDataProductAccessGroupsPrincipalOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.principalInput"></a>

```python
principal_input: GoogleDataplexDataProductAccessGroupsPrincipal
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataplexDataProductAccessGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroups">GoogleDataplexDataProductAccessGroups</a>

---


### GoogleDataplexDataProductAccessGroupsPrincipalOutputReference <a name="GoogleDataplexDataProductAccessGroupsPrincipalOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup">reset_google_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_google_group` <a name="reset_google_group" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup"></a>

```python
def reset_google_group() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput">google_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup">google_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_group_input`<sup>Optional</sup> <a name="google_group_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput"></a>

```python
google_group_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `google_group`<sup>Required</sup> <a name="google_group" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup"></a>

```python
google_group: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDataProductAccessGroupsPrincipal
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductAccessGroupsPrincipal">GoogleDataplexDataProductAccessGroupsPrincipal</a>

---


### GoogleDataplexDataProductTimeoutsOutputReference <a name="GoogleDataplexDataProductTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product

googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataplexDataProductTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProduct.GoogleDataplexDataProductTimeouts">GoogleDataplexDataProductTimeouts</a>

---



