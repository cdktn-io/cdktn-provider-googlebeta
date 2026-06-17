# `googleCesGuardrail` Submodule <a name="`googleCesGuardrail` Submodule" id="@cdktn/provider-google-beta.googleCesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesGuardrail <a name="GoogleCesGuardrail" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrail(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  guardrail_id: str,
  location: str,
  action: GoogleCesGuardrailAction = None,
  code_callback: GoogleCesGuardrailCodeCallback = None,
  content_filter: GoogleCesGuardrailContentFilter = None,
  deletion_policy: str = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  llm_policy: GoogleCesGuardrailLlmPolicy = None,
  llm_prompt_security: GoogleCesGuardrailLlmPromptSecurity = None,
  model_safety: GoogleCesGuardrailModelSafety = None,
  project: str = None,
  timeouts: GoogleCesGuardrailTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.guardrailId">guardrail_id</a></code> | <code>str</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.codeCallback">code_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.contentFilter">content_filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPolicy">llm_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPromptSecurity">llm_prompt_security</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.modelSafety">model_safety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.guardrailId"></a>

- *Type:* str

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `code_callback`<sup>Optional</sup> <a name="code_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.codeCallback"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `content_filter`<sup>Optional</sup> <a name="content_filter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.contentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.description"></a>

- *Type:* str

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llm_policy`<sup>Optional</sup> <a name="llm_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `llm_prompt_security`<sup>Optional</sup> <a name="llm_prompt_security" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPromptSecurity"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `model_safety`<sup>Optional</sup> <a name="model_safety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.modelSafety"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback">put_code_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter">put_content_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy">put_llm_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity">put_llm_prompt_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety">put_model_safety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback">reset_code_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter">reset_content_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy">reset_llm_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity">reset_llm_prompt_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety">reset_model_safety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction"></a>

```python
def put_action(
  generative_answer: GoogleCesGuardrailActionGenerativeAnswer = None,
  respond_immediately: GoogleCesGuardrailActionRespondImmediately = None,
  transfer_agent: GoogleCesGuardrailActionTransferAgent = None
) -> None
```

###### `generative_answer`<sup>Optional</sup> <a name="generative_answer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.generativeAnswer"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}

---

###### `respond_immediately`<sup>Optional</sup> <a name="respond_immediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.respondImmediately"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}

---

###### `transfer_agent`<sup>Optional</sup> <a name="transfer_agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.transferAgent"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}

---

##### `put_code_callback` <a name="put_code_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback"></a>

```python
def put_code_callback(
  after_agent_callback: GoogleCesGuardrailCodeCallbackAfterAgentCallback = None,
  after_model_callback: GoogleCesGuardrailCodeCallbackAfterModelCallback = None,
  before_agent_callback: GoogleCesGuardrailCodeCallbackBeforeAgentCallback = None,
  before_model_callback: GoogleCesGuardrailCodeCallbackBeforeModelCallback = None
) -> None
```

###### `after_agent_callback`<sup>Optional</sup> <a name="after_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.afterAgentCallback"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}

---

###### `after_model_callback`<sup>Optional</sup> <a name="after_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.afterModelCallback"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}

---

###### `before_agent_callback`<sup>Optional</sup> <a name="before_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.beforeAgentCallback"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}

---

###### `before_model_callback`<sup>Optional</sup> <a name="before_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.beforeModelCallback"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}

---

##### `put_content_filter` <a name="put_content_filter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter"></a>

```python
def put_content_filter(
  match_type: str,
  banned_contents: typing.List[str] = None,
  banned_contents_in_agent_response: typing.List[str] = None,
  banned_contents_in_user_input: typing.List[str] = None,
  disregard_diacritics: bool | IResolvable = None
) -> None
```

###### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.matchType"></a>

- *Type:* str

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}

---

###### `banned_contents`<sup>Optional</sup> <a name="banned_contents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.bannedContents"></a>

- *Type:* typing.List[str]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}

---

###### `banned_contents_in_agent_response`<sup>Optional</sup> <a name="banned_contents_in_agent_response" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.bannedContentsInAgentResponse"></a>

- *Type:* typing.List[str]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}

---

###### `banned_contents_in_user_input`<sup>Optional</sup> <a name="banned_contents_in_user_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.bannedContentsInUserInput"></a>

- *Type:* typing.List[str]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}

---

###### `disregard_diacritics`<sup>Optional</sup> <a name="disregard_diacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.disregardDiacritics"></a>

- *Type:* bool | cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}

---

##### `put_llm_policy` <a name="put_llm_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy"></a>

```python
def put_llm_policy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: GoogleCesGuardrailLlmPolicyModelSettings = None
) -> None
```

###### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.policyScope"></a>

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.prompt"></a>

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

###### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.allowShortUtterance"></a>

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.failOpen"></a>

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

###### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.maxConversationMessages"></a>

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

###### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

##### `put_llm_prompt_security` <a name="put_llm_prompt_security" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity"></a>

```python
def put_llm_prompt_security(
  custom_policy: GoogleCesGuardrailLlmPromptSecurityCustomPolicy = None,
  default_settings: GoogleCesGuardrailLlmPromptSecurityDefaultSettings = None,
  fail_open: bool | IResolvable = None
) -> None
```

###### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.customPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}

---

###### `default_settings`<sup>Optional</sup> <a name="default_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.defaultSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.failOpen"></a>

- *Type:* bool | cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `put_model_safety` <a name="put_model_safety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety"></a>

```python
def put_model_safety(
  safety_settings: IResolvable | typing.List[GoogleCesGuardrailModelSafetySafetySettings]
) -> None
```

###### `safety_settings`<sup>Required</sup> <a name="safety_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety.parameter.safetySettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_code_callback` <a name="reset_code_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback"></a>

```python
def reset_code_callback() -> None
```

##### `reset_content_filter` <a name="reset_content_filter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter"></a>

```python
def reset_content_filter() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_llm_policy` <a name="reset_llm_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy"></a>

```python
def reset_llm_policy() -> None
```

##### `reset_llm_prompt_security` <a name="reset_llm_prompt_security" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity"></a>

```python
def reset_llm_prompt_security() -> None
```

##### `reset_model_safety` <a name="reset_model_safety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety"></a>

```python
def reset_model_safety() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesGuardrail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback">code_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter">content_filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy">llm_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity">llm_prompt_security</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety">model_safety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput">action_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput">code_callback_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput">content_filter_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput">guardrail_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput">llm_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput">llm_prompt_security_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput">model_safety_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId">guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action"></a>

```python
action: GoogleCesGuardrailActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a>

---

##### `code_callback`<sup>Required</sup> <a name="code_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback"></a>

```python
code_callback: GoogleCesGuardrailCodeCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a>

---

##### `content_filter`<sup>Required</sup> <a name="content_filter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter"></a>

```python
content_filter: GoogleCesGuardrailContentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `llm_policy`<sup>Required</sup> <a name="llm_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy"></a>

```python
llm_policy: GoogleCesGuardrailLlmPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a>

---

##### `llm_prompt_security`<sup>Required</sup> <a name="llm_prompt_security" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity"></a>

```python
llm_prompt_security: GoogleCesGuardrailLlmPromptSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `model_safety`<sup>Required</sup> <a name="model_safety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety"></a>

```python
model_safety: GoogleCesGuardrailModelSafetyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts"></a>

```python
timeouts: GoogleCesGuardrailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput"></a>

```python
action_input: GoogleCesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `code_callback_input`<sup>Optional</sup> <a name="code_callback_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput"></a>

```python
code_callback_input: GoogleCesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `content_filter_input`<sup>Optional</sup> <a name="content_filter_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput"></a>

```python
content_filter_input: GoogleCesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `guardrail_id_input`<sup>Optional</sup> <a name="guardrail_id_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput"></a>

```python
guardrail_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `llm_policy_input`<sup>Optional</sup> <a name="llm_policy_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput"></a>

```python
llm_policy_input: GoogleCesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `llm_prompt_security_input`<sup>Optional</sup> <a name="llm_prompt_security_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput"></a>

```python
llm_prompt_security_input: GoogleCesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `model_safety_input`<sup>Optional</sup> <a name="model_safety_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput"></a>

```python
model_safety_input: GoogleCesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesGuardrailTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesGuardrailAction <a name="GoogleCesGuardrailAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailAction(
  generative_answer: GoogleCesGuardrailActionGenerativeAnswer = None,
  respond_immediately: GoogleCesGuardrailActionRespondImmediately = None,
  transfer_agent: GoogleCesGuardrailActionTransferAgent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer">generative_answer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately">respond_immediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent">transfer_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `generative_answer`<sup>Optional</sup> <a name="generative_answer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer"></a>

```python
generative_answer: GoogleCesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}

---

##### `respond_immediately`<sup>Optional</sup> <a name="respond_immediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately"></a>

```python
respond_immediately: GoogleCesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}

---

##### `transfer_agent`<sup>Optional</sup> <a name="transfer_agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent"></a>

```python
transfer_agent: GoogleCesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}

---

### GoogleCesGuardrailActionGenerativeAnswer <a name="GoogleCesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer(
  prompt: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt">prompt</a></code> | <code>str</code> | The prompt to use for the generative answer. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

### GoogleCesGuardrailActionRespondImmediately <a name="GoogleCesGuardrailActionRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately(
  responses: IResolvable | typing.List[GoogleCesGuardrailActionRespondImmediatelyResponses]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses">responses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]</code> | responses block. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses"></a>

```python
responses: IResolvable | typing.List[GoogleCesGuardrailActionRespondImmediatelyResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}

---

### GoogleCesGuardrailActionRespondImmediatelyResponses <a name="GoogleCesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses(
  text: str,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text">text</a></code> | <code>str</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```python
text: str
```

- *Type:* str

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#text GoogleCesGuardrail#text}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailActionTransferAgent <a name="GoogleCesGuardrailActionTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionTransferAgent(
  agent: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent">agent</a></code> | <code>str</code> | The name of the agent to transfer the conversation to. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent"></a>

```python
agent: str
```

- *Type:* str

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}

---

### GoogleCesGuardrailCodeCallback <a name="GoogleCesGuardrailCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallback(
  after_agent_callback: GoogleCesGuardrailCodeCallbackAfterAgentCallback = None,
  after_model_callback: GoogleCesGuardrailCodeCallbackAfterModelCallback = None,
  before_agent_callback: GoogleCesGuardrailCodeCallbackBeforeAgentCallback = None,
  before_model_callback: GoogleCesGuardrailCodeCallbackBeforeModelCallback = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback">after_agent_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback">after_model_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback">before_agent_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback">before_model_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `after_agent_callback`<sup>Optional</sup> <a name="after_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback"></a>

```python
after_agent_callback: GoogleCesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}

---

##### `after_model_callback`<sup>Optional</sup> <a name="after_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback"></a>

```python
after_model_callback: GoogleCesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}

---

##### `before_agent_callback`<sup>Optional</sup> <a name="before_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```python
before_agent_callback: GoogleCesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}

---

##### `before_model_callback`<sup>Optional</sup> <a name="before_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback"></a>

```python
before_model_callback: GoogleCesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}

---

### GoogleCesGuardrailCodeCallbackAfterAgentCallback <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackAfterModelCallback <a name="GoogleCesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeAgentCallback <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeModelCallback <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailConfig <a name="GoogleCesGuardrailConfig" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  guardrail_id: str,
  location: str,
  action: GoogleCesGuardrailAction = None,
  code_callback: GoogleCesGuardrailCodeCallback = None,
  content_filter: GoogleCesGuardrailContentFilter = None,
  deletion_policy: str = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  llm_policy: GoogleCesGuardrailLlmPolicy = None,
  llm_prompt_security: GoogleCesGuardrailLlmPromptSecurity = None,
  model_safety: GoogleCesGuardrailModelSafety = None,
  project: str = None,
  timeouts: GoogleCesGuardrailTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId">guardrail_id</a></code> | <code>str</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback">code_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter">content_filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description">description</a></code> | <code>str</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy">llm_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity">llm_prompt_security</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety">model_safety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action"></a>

```python
action: GoogleCesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `code_callback`<sup>Optional</sup> <a name="code_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback"></a>

```python
code_callback: GoogleCesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `content_filter`<sup>Optional</sup> <a name="content_filter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter"></a>

```python
content_filter: GoogleCesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llm_policy`<sup>Optional</sup> <a name="llm_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy"></a>

```python
llm_policy: GoogleCesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `llm_prompt_security`<sup>Optional</sup> <a name="llm_prompt_security" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity"></a>

```python
llm_prompt_security: GoogleCesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `model_safety`<sup>Optional</sup> <a name="model_safety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety"></a>

```python
model_safety: GoogleCesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts"></a>

```python
timeouts: GoogleCesGuardrailTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

### GoogleCesGuardrailContentFilter <a name="GoogleCesGuardrailContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailContentFilter(
  match_type: str,
  banned_contents: typing.List[str] = None,
  banned_contents_in_agent_response: typing.List[str] = None,
  banned_contents_in_user_input: typing.List[str] = None,
  disregard_diacritics: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType">match_type</a></code> | <code>str</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents">banned_contents</a></code> | <code>typing.List[str]</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse">banned_contents_in_agent_response</a></code> | <code>typing.List[str]</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput">banned_contents_in_user_input</a></code> | <code>typing.List[str]</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics">disregard_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}

---

##### `banned_contents`<sup>Optional</sup> <a name="banned_contents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents"></a>

```python
banned_contents: typing.List[str]
```

- *Type:* typing.List[str]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}

---

##### `banned_contents_in_agent_response`<sup>Optional</sup> <a name="banned_contents_in_agent_response" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```python
banned_contents_in_agent_response: typing.List[str]
```

- *Type:* typing.List[str]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}

---

##### `banned_contents_in_user_input`<sup>Optional</sup> <a name="banned_contents_in_user_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```python
banned_contents_in_user_input: typing.List[str]
```

- *Type:* typing.List[str]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}

---

##### `disregard_diacritics`<sup>Optional</sup> <a name="disregard_diacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics"></a>

```python
disregard_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}

---

### GoogleCesGuardrailLlmPolicy <a name="GoogleCesGuardrailLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPolicy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: GoogleCesGuardrailLlmPolicyModelSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope">policy_scope</a></code> | <code>str</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt">prompt</a></code> | <code>str</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings"></a>

```python
model_settings: GoogleCesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPolicyModelSettings <a name="GoogleCesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurity <a name="GoogleCesGuardrailLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity(
  custom_policy: GoogleCesGuardrailLlmPromptSecurityCustomPolicy = None,
  default_settings: GoogleCesGuardrailLlmPromptSecurityDefaultSettings = None,
  fail_open: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings">default_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```python
custom_policy: GoogleCesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}

---

##### `default_settings`<sup>Optional</sup> <a name="default_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```python
default_settings: GoogleCesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicy <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">policy_scope</a></code> | <code>str</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">prompt</a></code> | <code>str</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```python
model_settings: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurityDefaultSettings <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings()
```


### GoogleCesGuardrailModelSafety <a name="GoogleCesGuardrailModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailModelSafety(
  safety_settings: IResolvable | typing.List[GoogleCesGuardrailModelSafetySafetySettings]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings">safety_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]</code> | safety_settings block. |

---

##### `safety_settings`<sup>Required</sup> <a name="safety_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings"></a>

```python
safety_settings: IResolvable | typing.List[GoogleCesGuardrailModelSafetySafetySettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}

---

### GoogleCesGuardrailModelSafetySafetySettings <a name="GoogleCesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings(
  category: str,
  threshold: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category">category</a></code> | <code>str</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold">threshold</a></code> | <code>str</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category"></a>

```python
category: str
```

- *Type:* str

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#category GoogleCesGuardrail#category}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#threshold GoogleCesGuardrail#threshold}

---

### GoogleCesGuardrailTimeouts <a name="GoogleCesGuardrailTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesGuardrailActionGenerativeAnswerOutputReference <a name="GoogleCesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---


### GoogleCesGuardrailActionOutputReference <a name="GoogleCesGuardrailActionOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer">put_generative_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately">put_respond_immediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent">put_transfer_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer">reset_generative_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately">reset_respond_immediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent">reset_transfer_agent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_generative_answer` <a name="put_generative_answer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```python
def put_generative_answer(
  prompt: str
) -> None
```

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer.parameter.prompt"></a>

- *Type:* str

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `put_respond_immediately` <a name="put_respond_immediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately"></a>

```python
def put_respond_immediately(
  responses: IResolvable | typing.List[GoogleCesGuardrailActionRespondImmediatelyResponses]
) -> None
```

###### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately.parameter.responses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}

---

##### `put_transfer_agent` <a name="put_transfer_agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent"></a>

```python
def put_transfer_agent(
  agent: str
) -> None
```

###### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent.parameter.agent"></a>

- *Type:* str

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}

---

##### `reset_generative_answer` <a name="reset_generative_answer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```python
def reset_generative_answer() -> None
```

##### `reset_respond_immediately` <a name="reset_respond_immediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately"></a>

```python
def reset_respond_immediately() -> None
```

##### `reset_transfer_agent` <a name="reset_transfer_agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent"></a>

```python
def reset_transfer_agent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer">generative_answer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately">respond_immediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent">transfer_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput">generative_answer_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput">respond_immediately_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput">transfer_agent_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generative_answer`<sup>Required</sup> <a name="generative_answer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer"></a>

```python
generative_answer: GoogleCesGuardrailActionGenerativeAnswerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `respond_immediately`<sup>Required</sup> <a name="respond_immediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately"></a>

```python
respond_immediately: GoogleCesGuardrailActionRespondImmediatelyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `transfer_agent`<sup>Required</sup> <a name="transfer_agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent"></a>

```python
transfer_agent: GoogleCesGuardrailActionTransferAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a>

---

##### `generative_answer_input`<sup>Optional</sup> <a name="generative_answer_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```python
generative_answer_input: GoogleCesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `respond_immediately_input`<sup>Optional</sup> <a name="respond_immediately_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```python
respond_immediately_input: GoogleCesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `transfer_agent_input`<sup>Optional</sup> <a name="transfer_agent_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput"></a>

```python
transfer_agent_input: GoogleCesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---


### GoogleCesGuardrailActionRespondImmediatelyOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses">put_responses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_responses` <a name="put_responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```python
def put_responses(
  value: IResolvable | typing.List[GoogleCesGuardrailActionRespondImmediatelyResponses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses">responses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">responses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```python
responses: GoogleCesGuardrailActionRespondImmediatelyResponsesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `responses_input`<sup>Optional</sup> <a name="responses_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```python
responses_input: IResolvable | typing.List[GoogleCesGuardrailActionRespondImmediatelyResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesList <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesGuardrailActionRespondImmediatelyResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>]

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesGuardrailActionRespondImmediatelyResponses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>

---


### GoogleCesGuardrailActionTransferAgentOutputReference <a name="GoogleCesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput">agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent">agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```python
agent_input: str
```

- *Type:* str

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```python
agent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---


### GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">put_after_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback">put_after_model_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">put_before_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">put_before_model_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">reset_after_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">reset_after_model_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">reset_before_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">reset_before_model_callback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_after_agent_callback` <a name="put_after_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```python
def put_after_agent_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

##### `put_after_model_callback` <a name="put_after_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```python
def put_after_model_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

##### `put_before_agent_callback` <a name="put_before_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```python
def put_before_agent_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

##### `put_before_model_callback` <a name="put_before_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```python
def put_before_model_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

##### `reset_after_agent_callback` <a name="reset_after_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```python
def reset_after_agent_callback() -> None
```

##### `reset_after_model_callback` <a name="reset_after_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```python
def reset_after_model_callback() -> None
```

##### `reset_before_agent_callback` <a name="reset_before_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```python
def reset_before_agent_callback() -> None
```

##### `reset_before_model_callback` <a name="reset_before_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```python
def reset_before_model_callback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">after_agent_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback">after_model_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">before_agent_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">before_model_callback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">after_agent_callback_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">after_model_callback_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">before_agent_callback_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">before_model_callback_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_agent_callback`<sup>Required</sup> <a name="after_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```python
after_agent_callback: GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `after_model_callback`<sup>Required</sup> <a name="after_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```python
after_model_callback: GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `before_agent_callback`<sup>Required</sup> <a name="before_agent_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```python
before_agent_callback: GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `before_model_callback`<sup>Required</sup> <a name="before_model_callback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```python
before_model_callback: GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `after_agent_callback_input`<sup>Optional</sup> <a name="after_agent_callback_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```python
after_agent_callback_input: GoogleCesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `after_model_callback_input`<sup>Optional</sup> <a name="after_model_callback_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```python
after_model_callback_input: GoogleCesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `before_agent_callback_input`<sup>Optional</sup> <a name="before_agent_callback_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```python
before_agent_callback_input: GoogleCesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `before_model_callback_input`<sup>Optional</sup> <a name="before_model_callback_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```python
before_model_callback_input: GoogleCesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---


### GoogleCesGuardrailContentFilterOutputReference <a name="GoogleCesGuardrailContentFilterOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents">reset_banned_contents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">reset_banned_contents_in_agent_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">reset_banned_contents_in_user_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics">reset_disregard_diacritics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_banned_contents` <a name="reset_banned_contents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```python
def reset_banned_contents() -> None
```

##### `reset_banned_contents_in_agent_response` <a name="reset_banned_contents_in_agent_response" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```python
def reset_banned_contents_in_agent_response() -> None
```

##### `reset_banned_contents_in_user_input` <a name="reset_banned_contents_in_user_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```python
def reset_banned_contents_in_user_input() -> None
```

##### `reset_disregard_diacritics` <a name="reset_disregard_diacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```python
def reset_disregard_diacritics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">banned_contents_in_agent_response_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput">banned_contents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">banned_contents_in_user_input_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">disregard_diacritics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents">banned_contents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">banned_contents_in_agent_response</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">banned_contents_in_user_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics">disregard_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banned_contents_in_agent_response_input`<sup>Optional</sup> <a name="banned_contents_in_agent_response_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```python
banned_contents_in_agent_response_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_input`<sup>Optional</sup> <a name="banned_contents_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```python
banned_contents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_in_user_input_input`<sup>Optional</sup> <a name="banned_contents_in_user_input_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```python
banned_contents_in_user_input_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disregard_diacritics_input`<sup>Optional</sup> <a name="disregard_diacritics_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```python
disregard_diacritics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `banned_contents`<sup>Required</sup> <a name="banned_contents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```python
banned_contents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_in_agent_response`<sup>Required</sup> <a name="banned_contents_in_agent_response" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```python
banned_contents_in_agent_response: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_in_user_input`<sup>Required</sup> <a name="banned_contents_in_user_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```python
banned_contents_in_user_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disregard_diacritics`<sup>Required</sup> <a name="disregard_diacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```python
disregard_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---


### GoogleCesGuardrailLlmPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPolicyOutputReference <a name="GoogleCesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">reset_allow_short_utterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">reset_max_conversation_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings">reset_model_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

##### `reset_allow_short_utterance` <a name="reset_allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```python
def reset_allow_short_utterance() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_max_conversation_messages` <a name="reset_max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```python
def reset_max_conversation_messages() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">allow_short_utterance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">max_conversation_messages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput">policy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope">policy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```python
model_settings: GoogleCesGuardrailLlmPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `allow_short_utterance_input`<sup>Optional</sup> <a name="allow_short_utterance_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```python
allow_short_utterance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages_input`<sup>Optional</sup> <a name="max_conversation_messages_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```python
max_conversation_messages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: GoogleCesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `policy_scope_input`<sup>Optional</sup> <a name="policy_scope_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```python
policy_scope_input: str
```

- *Type:* str

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `allow_short_utterance`<sup>Required</sup> <a name="allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages`<sup>Required</sup> <a name="max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">reset_allow_short_utterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">reset_max_conversation_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">reset_model_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

##### `reset_allow_short_utterance` <a name="reset_allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```python
def reset_allow_short_utterance() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_max_conversation_messages` <a name="reset_max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```python
def reset_max_conversation_messages() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">allow_short_utterance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">max_conversation_messages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">policy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">policy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```python
model_settings: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `allow_short_utterance_input`<sup>Optional</sup> <a name="allow_short_utterance_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```python
allow_short_utterance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages_input`<sup>Optional</sup> <a name="max_conversation_messages_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```python
max_conversation_messages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `policy_scope_input`<sup>Optional</sup> <a name="policy_scope_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```python
policy_scope_input: str
```

- *Type:* str

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `allow_short_utterance`<sup>Required</sup> <a name="allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages`<sup>Required</sup> <a name="max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">default_prompt_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_prompt_template`<sup>Required</sup> <a name="default_prompt_template" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```python
default_prompt_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">put_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">put_default_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">reset_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">reset_default_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_policy` <a name="put_custom_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```python
def put_custom_policy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings = None
) -> None
```

###### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.policyScope"></a>

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.prompt"></a>

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

###### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.allowShortUtterance"></a>

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.failOpen"></a>

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

###### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.maxConversationMessages"></a>

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

###### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

##### `put_default_settings` <a name="put_default_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```python
def put_default_settings() -> None
```

##### `reset_custom_policy` <a name="reset_custom_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```python
def reset_custom_policy() -> None
```

##### `reset_default_settings` <a name="reset_default_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```python
def reset_default_settings() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">default_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">custom_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">default_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_policy`<sup>Required</sup> <a name="custom_policy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```python
custom_policy: GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `default_settings`<sup>Required</sup> <a name="default_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```python
default_settings: GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `custom_policy_input`<sup>Optional</sup> <a name="custom_policy_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```python
custom_policy_input: GoogleCesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `default_settings_input`<sup>Optional</sup> <a name="default_settings_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```python
default_settings_input: GoogleCesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---


### GoogleCesGuardrailModelSafetyOutputReference <a name="GoogleCesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings">put_safety_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_safety_settings` <a name="put_safety_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```python
def put_safety_settings(
  value: IResolvable | typing.List[GoogleCesGuardrailModelSafetySafetySettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings">safety_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput">safety_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `safety_settings`<sup>Required</sup> <a name="safety_settings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```python
safety_settings: GoogleCesGuardrailModelSafetySafetySettingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a>

---

##### `safety_settings_input`<sup>Optional</sup> <a name="safety_settings_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```python
safety_settings_input: IResolvable | typing.List[GoogleCesGuardrailModelSafetySafetySettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---


### GoogleCesGuardrailModelSafetySafetySettingsList <a name="GoogleCesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesGuardrailModelSafetySafetySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesGuardrailModelSafetySafetySettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>]

---


### GoogleCesGuardrailModelSafetySafetySettingsOutputReference <a name="GoogleCesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesGuardrailModelSafetySafetySettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>

---


### GoogleCesGuardrailTimeoutsOutputReference <a name="GoogleCesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_guardrail

googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesGuardrailTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---



