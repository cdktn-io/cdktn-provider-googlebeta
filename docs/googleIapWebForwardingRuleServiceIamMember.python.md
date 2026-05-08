# `googleIapWebForwardingRuleServiceIamMember` Submodule <a name="`googleIapWebForwardingRuleServiceIamMember` Submodule" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebForwardingRuleServiceIamMember <a name="GoogleIapWebForwardingRuleServiceIamMember" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member google_iap_web_forwarding_rule_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  forwarding_rule_service_name: str,
  member: str,
  role: str,
  condition: GoogleIapWebForwardingRuleServiceIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.forwardingRuleServiceName">forwarding_rule_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamMember#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#member GoogleIapWebForwardingRuleServiceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#role GoogleIapWebForwardingRuleServiceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#id GoogleIapWebForwardingRuleServiceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#project GoogleIapWebForwardingRuleServiceIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `forwarding_rule_service_name`<sup>Required</sup> <a name="forwarding_rule_service_name" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.forwardingRuleServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamMember#forwarding_rule_service_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#member GoogleIapWebForwardingRuleServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#role GoogleIapWebForwardingRuleServiceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#condition GoogleIapWebForwardingRuleServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#id GoogleIapWebForwardingRuleServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#project GoogleIapWebForwardingRuleServiceIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#expression GoogleIapWebForwardingRuleServiceIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#title GoogleIapWebForwardingRuleServiceIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#description GoogleIapWebForwardingRuleServiceIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIapWebForwardingRuleServiceIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIapWebForwardingRuleServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebForwardingRuleServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference">GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.forwardingRuleServiceNameInput">forwarding_rule_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.forwardingRuleServiceName">forwarding_rule_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.condition"></a>

```python
condition: GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference">GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.conditionInput"></a>

```python
condition_input: GoogleIapWebForwardingRuleServiceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a>

---

##### `forwarding_rule_service_name_input`<sup>Optional</sup> <a name="forwarding_rule_service_name_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.forwardingRuleServiceNameInput"></a>

```python
forwarding_rule_service_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `forwarding_rule_service_name`<sup>Required</sup> <a name="forwarding_rule_service_name" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.forwardingRuleServiceName"></a>

```python
forwarding_rule_service_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebForwardingRuleServiceIamMemberCondition <a name="GoogleIapWebForwardingRuleServiceIamMemberCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#expression GoogleIapWebForwardingRuleServiceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#title GoogleIapWebForwardingRuleServiceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#description GoogleIapWebForwardingRuleServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#expression GoogleIapWebForwardingRuleServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#title GoogleIapWebForwardingRuleServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#description GoogleIapWebForwardingRuleServiceIamMember#description}.

---

### GoogleIapWebForwardingRuleServiceIamMemberConfig <a name="GoogleIapWebForwardingRuleServiceIamMemberConfig" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  forwarding_rule_service_name: str,
  member: str,
  role: str,
  condition: GoogleIapWebForwardingRuleServiceIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.forwardingRuleServiceName">forwarding_rule_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamMember#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#member GoogleIapWebForwardingRuleServiceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#role GoogleIapWebForwardingRuleServiceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#id GoogleIapWebForwardingRuleServiceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#project GoogleIapWebForwardingRuleServiceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `forwarding_rule_service_name`<sup>Required</sup> <a name="forwarding_rule_service_name" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.forwardingRuleServiceName"></a>

```python
forwarding_rule_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamMember#forwarding_rule_service_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#member GoogleIapWebForwardingRuleServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#role GoogleIapWebForwardingRuleServiceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.condition"></a>

```python
condition: GoogleIapWebForwardingRuleServiceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#condition GoogleIapWebForwardingRuleServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#id GoogleIapWebForwardingRuleServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_iap_web_forwarding_rule_service_iam_member#project GoogleIapWebForwardingRuleServiceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference <a name="GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_web_forwarding_rule_service_iam_member

googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIapWebForwardingRuleServiceIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamMember.GoogleIapWebForwardingRuleServiceIamMemberCondition">GoogleIapWebForwardingRuleServiceIamMemberCondition</a>

---



