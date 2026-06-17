# `googleGkeHubMembershipBinding` Submodule <a name="`googleGkeHubMembershipBinding` Submodule" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembershipBinding <a name="GoogleGkeHubMembershipBinding" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding google_gke_hub_membership_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  membership_binding_id: str,
  membership_id: str,
  scope: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeHubMembershipBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.membershipBindingId">membership_binding_id</a></code> | <code>str</code> | The client-provided identifier of the membership binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.membershipId">membership_id</a></code> | <code>str</code> | Id of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.scope">scope</a></code> | <code>str</code> | A Workspace resource name in the format 'projects/* /locations/* /scopes/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#id GoogleGkeHubMembershipBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Membership binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#project GoogleGkeHubMembershipBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.location"></a>

- *Type:* str

Location of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#location GoogleGkeHubMembershipBinding#location}

---

##### `membership_binding_id`<sup>Required</sup> <a name="membership_binding_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.membershipBindingId"></a>

- *Type:* str

The client-provided identifier of the membership binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#membership_binding_id GoogleGkeHubMembershipBinding#membership_binding_id}

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.membershipId"></a>

- *Type:* str

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#membership_id GoogleGkeHubMembershipBinding#membership_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.scope"></a>

- *Type:* str

A Workspace resource name in the format 'projects/* /locations/* /scopes/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#scope GoogleGkeHubMembershipBinding#scope}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#deletion_policy GoogleGkeHubMembershipBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#id GoogleGkeHubMembershipBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this Membership binding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#labels GoogleGkeHubMembershipBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#project GoogleGkeHubMembershipBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#timeouts GoogleGkeHubMembershipBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#create GoogleGkeHubMembershipBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#delete GoogleGkeHubMembershipBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#update GoogleGkeHubMembershipBinding#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleGkeHubMembershipBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleGkeHubMembershipBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGkeHubMembershipBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGkeHubMembershipBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembershipBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList">GoogleGkeHubMembershipBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference">GoogleGkeHubMembershipBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingIdInput">membership_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipIdInput">membership_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingId">membership_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipId">membership_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.state"></a>

```python
state: GoogleGkeHubMembershipBindingStateList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList">GoogleGkeHubMembershipBindingStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeouts"></a>

```python
timeouts: GoogleGkeHubMembershipBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference">GoogleGkeHubMembershipBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `membership_binding_id_input`<sup>Optional</sup> <a name="membership_binding_id_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingIdInput"></a>

```python
membership_binding_id_input: str
```

- *Type:* str

---

##### `membership_id_input`<sup>Optional</sup> <a name="membership_id_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipIdInput"></a>

```python
membership_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleGkeHubMembershipBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `membership_binding_id`<sup>Required</sup> <a name="membership_binding_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipBindingId"></a>

```python
membership_binding_id: str
```

- *Type:* str

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipBindingConfig <a name="GoogleGkeHubMembershipBindingConfig" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  membership_binding_id: str,
  membership_id: str,
  scope: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeHubMembershipBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.location">location</a></code> | <code>str</code> | Location of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipBindingId">membership_binding_id</a></code> | <code>str</code> | The client-provided identifier of the membership binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipId">membership_id</a></code> | <code>str</code> | Id of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.scope">scope</a></code> | <code>str</code> | A Workspace resource name in the format 'projects/* /locations/* /scopes/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#id GoogleGkeHubMembershipBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Membership binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#project GoogleGkeHubMembershipBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#location GoogleGkeHubMembershipBinding#location}

---

##### `membership_binding_id`<sup>Required</sup> <a name="membership_binding_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipBindingId"></a>

```python
membership_binding_id: str
```

- *Type:* str

The client-provided identifier of the membership binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#membership_binding_id GoogleGkeHubMembershipBinding#membership_binding_id}

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#membership_id GoogleGkeHubMembershipBinding#membership_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

A Workspace resource name in the format 'projects/* /locations/* /scopes/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#scope GoogleGkeHubMembershipBinding#scope}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#deletion_policy GoogleGkeHubMembershipBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#id GoogleGkeHubMembershipBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this Membership binding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#labels GoogleGkeHubMembershipBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#project GoogleGkeHubMembershipBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeHubMembershipBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#timeouts GoogleGkeHubMembershipBinding#timeouts}

---

### GoogleGkeHubMembershipBindingState <a name="GoogleGkeHubMembershipBindingState" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState()
```


### GoogleGkeHubMembershipBindingTimeouts <a name="GoogleGkeHubMembershipBindingTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#create GoogleGkeHubMembershipBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#delete GoogleGkeHubMembershipBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#update GoogleGkeHubMembershipBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#create GoogleGkeHubMembershipBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#delete GoogleGkeHubMembershipBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_membership_binding#update GoogleGkeHubMembershipBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipBindingStateList <a name="GoogleGkeHubMembershipBindingStateList" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeHubMembershipBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeHubMembershipBindingStateOutputReference <a name="GoogleGkeHubMembershipBindingStateOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState">GoogleGkeHubMembershipBindingState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubMembershipBindingState
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingState">GoogleGkeHubMembershipBindingState</a>

---


### GoogleGkeHubMembershipBindingTimeoutsOutputReference <a name="GoogleGkeHubMembershipBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_membership_binding

googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleGkeHubMembershipBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipBinding.GoogleGkeHubMembershipBindingTimeouts">GoogleGkeHubMembershipBindingTimeouts</a>

---



