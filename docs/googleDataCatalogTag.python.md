# `googleDataCatalogTag` Submodule <a name="`googleDataCatalogTag` Submodule" id="@cdktn/provider-google-beta.googleDataCatalogTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogTag <a name="GoogleDataCatalogTag" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag google_data_catalog_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTag(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fields: IResolvable | typing.List[GoogleDataCatalogTagFields],
  template: str,
  column: str = None,
  deletion_policy: str = None,
  id: str = None,
  parent: str = None,
  timeouts: GoogleDataCatalogTagTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]</code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.template">template</a></code> | <code>str</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.column">column</a></code> | <code>str</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#fields GoogleDataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.template"></a>

- *Type:* str

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#template GoogleDataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.column"></a>

- *Type:* str

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#column GoogleDataCatalogTag#column}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#deletion_policy GoogleDataCatalogTag#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#parent GoogleDataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#timeouts GoogleDataCatalogTag#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fields` <a name="put_fields" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[GoogleDataCatalogTagFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}.

---

##### `reset_column` <a name="reset_column" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDataCatalogTag resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDataCatalogTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataCatalogTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataCatalogTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList">GoogleDataCatalogTagFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateDisplayname">template_displayname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference">GoogleDataCatalogTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.template">template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fields"></a>

```python
fields: GoogleDataCatalogTagFieldsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList">GoogleDataCatalogTagFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_displayname`<sup>Required</sup> <a name="template_displayname" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateDisplayname"></a>

```python
template_displayname: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeouts"></a>

```python
timeouts: GoogleDataCatalogTagTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference">GoogleDataCatalogTagTimeoutsOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[GoogleDataCatalogTagFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDataCatalogTagTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.template"></a>

```python
template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogTagConfig <a name="GoogleDataCatalogTagConfig" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTagConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fields: IResolvable | typing.List[GoogleDataCatalogTagFields],
  template: str,
  column: str = None,
  deletion_policy: str = None,
  id: str = None,
  parent: str = None,
  timeouts: GoogleDataCatalogTagTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]</code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.template">template</a></code> | <code>str</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.column">column</a></code> | <code>str</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.fields"></a>

```python
fields: IResolvable | typing.List[GoogleDataCatalogTagFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#fields GoogleDataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.template"></a>

```python
template: str
```

- *Type:* str

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#template GoogleDataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.column"></a>

```python
column: str
```

- *Type:* str

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#column GoogleDataCatalogTag#column}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#deletion_policy GoogleDataCatalogTag#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#parent GoogleDataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.timeouts"></a>

```python
timeouts: GoogleDataCatalogTagTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#timeouts GoogleDataCatalogTag#timeouts}

---

### GoogleDataCatalogTagFields <a name="GoogleDataCatalogTagFields" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTagFields(
  field_name: str,
  bool_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  enum_value: str = None,
  string_value: str = None,
  timestamp_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#field_name GoogleDataCatalogTag#field_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Holds the value for a tag field with boolean type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Holds the value for a tag field with double type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.enumValue">enum_value</a></code> | <code>str</code> | The display name of the enum value. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.stringValue">string_value</a></code> | <code>str</code> | Holds the value for a tag field with string type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.timestampValue">timestamp_value</a></code> | <code>str</code> | Holds the value for a tag field with timestamp type. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#field_name GoogleDataCatalogTag#field_name}.

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Holds the value for a tag field with boolean type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#bool_value GoogleDataCatalogTag#bool_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Holds the value for a tag field with double type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#double_value GoogleDataCatalogTag#double_value}

---

##### `enum_value`<sup>Optional</sup> <a name="enum_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.enumValue"></a>

```python
enum_value: str
```

- *Type:* str

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#enum_value GoogleDataCatalogTag#enum_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Holds the value for a tag field with string type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#string_value GoogleDataCatalogTag#string_value}

---

##### `timestamp_value`<sup>Optional</sup> <a name="timestamp_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.timestampValue"></a>

```python
timestamp_value: str
```

- *Type:* str

Holds the value for a tag field with timestamp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#timestamp_value GoogleDataCatalogTag#timestamp_value}

---

### GoogleDataCatalogTagTimeouts <a name="GoogleDataCatalogTagTimeouts" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTagTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogTagFieldsList <a name="GoogleDataCatalogTagFieldsList" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTagFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogTagFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataCatalogTagFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>]

---


### GoogleDataCatalogTagFieldsOutputReference <a name="GoogleDataCatalogTagFieldsOutputReference" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetEnumValue">reset_enum_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetTimestampValue">reset_timestamp_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_enum_value` <a name="reset_enum_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetEnumValue"></a>

```python
def reset_enum_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```

##### `reset_timestamp_value` <a name="reset_timestamp_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetTimestampValue"></a>

```python
def reset_timestamp_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValueInput">enum_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValueInput">timestamp_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValue">enum_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValue">timestamp_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum_value_input`<sup>Optional</sup> <a name="enum_value_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValueInput"></a>

```python
enum_value_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `timestamp_value_input`<sup>Optional</sup> <a name="timestamp_value_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValueInput"></a>

```python
timestamp_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum_value`<sup>Required</sup> <a name="enum_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValue"></a>

```python
enum_value: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `timestamp_value`<sup>Required</sup> <a name="timestamp_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValue"></a>

```python
timestamp_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataCatalogTagFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>

---


### GoogleDataCatalogTagTimeoutsOutputReference <a name="GoogleDataCatalogTagTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_catalog_tag

googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataCatalogTagTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---



