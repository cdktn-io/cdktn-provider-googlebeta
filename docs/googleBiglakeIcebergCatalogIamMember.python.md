# `googleBiglakeIcebergCatalogIamMember` Submodule <a name="`googleBiglakeIcebergCatalogIamMember` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergCatalogIamMember <a name="GoogleBiglakeIcebergCatalogIamMember" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member google_biglake_iceberg_catalog_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  member: str,
  name: str,
  role: str,
  condition: GoogleBiglakeIcebergCatalogIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#member GoogleBiglakeIcebergCatalogIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#name GoogleBiglakeIcebergCatalogIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#role GoogleBiglakeIcebergCatalogIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#id GoogleBiglakeIcebergCatalogIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#project GoogleBiglakeIcebergCatalogIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#member GoogleBiglakeIcebergCatalogIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#name GoogleBiglakeIcebergCatalogIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#role GoogleBiglakeIcebergCatalogIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#condition GoogleBiglakeIcebergCatalogIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#id GoogleBiglakeIcebergCatalogIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#project GoogleBiglakeIcebergCatalogIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#expression GoogleBiglakeIcebergCatalogIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#title GoogleBiglakeIcebergCatalogIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#description GoogleBiglakeIcebergCatalogIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergCatalogIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergCatalogIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBiglakeIcebergCatalogIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBiglakeIcebergCatalogIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergCatalogIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference">GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.condition"></a>

```python
condition: GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference">GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.conditionInput"></a>

```python
condition_input: GoogleBiglakeIcebergCatalogIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergCatalogIamMemberCondition <a name="GoogleBiglakeIcebergCatalogIamMemberCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#expression GoogleBiglakeIcebergCatalogIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#title GoogleBiglakeIcebergCatalogIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#description GoogleBiglakeIcebergCatalogIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#expression GoogleBiglakeIcebergCatalogIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#title GoogleBiglakeIcebergCatalogIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#description GoogleBiglakeIcebergCatalogIamMember#description}.

---

### GoogleBiglakeIcebergCatalogIamMemberConfig <a name="GoogleBiglakeIcebergCatalogIamMemberConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  member: str,
  name: str,
  role: str,
  condition: GoogleBiglakeIcebergCatalogIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#member GoogleBiglakeIcebergCatalogIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#name GoogleBiglakeIcebergCatalogIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#role GoogleBiglakeIcebergCatalogIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#id GoogleBiglakeIcebergCatalogIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#project GoogleBiglakeIcebergCatalogIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#member GoogleBiglakeIcebergCatalogIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#name GoogleBiglakeIcebergCatalogIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#role GoogleBiglakeIcebergCatalogIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.condition"></a>

```python
condition: GoogleBiglakeIcebergCatalogIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#condition GoogleBiglakeIcebergCatalogIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#id GoogleBiglakeIcebergCatalogIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_catalog_iam_member#project GoogleBiglakeIcebergCatalogIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference <a name="GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog_iam_member

googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalogIamMember.GoogleBiglakeIcebergCatalogIamMemberCondition">GoogleBiglakeIcebergCatalogIamMemberCondition</a>

---



