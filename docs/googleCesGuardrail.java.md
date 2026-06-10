# `googleCesGuardrail` Submodule <a name="`googleCesGuardrail` Submodule" id="@cdktn/provider-google-beta.googleCesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesGuardrail <a name="GoogleCesGuardrail" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrail;

GoogleCesGuardrail.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .guardrailId(java.lang.String)
    .location(java.lang.String)
//  .action(GoogleCesGuardrailAction)
//  .codeCallback(GoogleCesGuardrailCodeCallback)
//  .contentFilter(GoogleCesGuardrailContentFilter)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .llmPolicy(GoogleCesGuardrailLlmPolicy)
//  .llmPromptSecurity(GoogleCesGuardrailLlmPromptSecurity)
//  .modelSafety(GoogleCesGuardrailModelSafety)
//  .project(java.lang.String)
//  .timeouts(GoogleCesGuardrailTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.guardrailId"></a>

- *Type:* java.lang.String

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `codeCallback`<sup>Optional</sup> <a name="codeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.codeCallback"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `contentFilter`<sup>Optional</sup> <a name="contentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.contentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llmPolicy`<sup>Optional</sup> <a name="llmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `llmPromptSecurity`<sup>Optional</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.llmPromptSecurity"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `modelSafety`<sup>Optional</sup> <a name="modelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.modelSafety"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback">putCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter">putContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy">putLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity">putLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety">putModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback">resetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter">resetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy">resetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity">resetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety">resetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction"></a>

```java
public void putAction(GoogleCesGuardrailAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `putCodeCallback` <a name="putCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback"></a>

```java
public void putCodeCallback(GoogleCesGuardrailCodeCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `putContentFilter` <a name="putContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter"></a>

```java
public void putContentFilter(GoogleCesGuardrailContentFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `putLlmPolicy` <a name="putLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy"></a>

```java
public void putLlmPolicy(GoogleCesGuardrailLlmPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `putLlmPromptSecurity` <a name="putLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity"></a>

```java
public void putLlmPromptSecurity(GoogleCesGuardrailLlmPromptSecurity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `putModelSafety` <a name="putModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety"></a>

```java
public void putModelSafety(GoogleCesGuardrailModelSafety value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts"></a>

```java
public void putTimeouts(GoogleCesGuardrailTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction"></a>

```java
public void resetAction()
```

##### `resetCodeCallback` <a name="resetCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback"></a>

```java
public void resetCodeCallback()
```

##### `resetContentFilter` <a name="resetContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter"></a>

```java
public void resetContentFilter()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId"></a>

```java
public void resetId()
```

##### `resetLlmPolicy` <a name="resetLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy"></a>

```java
public void resetLlmPolicy()
```

##### `resetLlmPromptSecurity` <a name="resetLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity"></a>

```java
public void resetLlmPromptSecurity()
```

##### `resetModelSafety` <a name="resetModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety"></a>

```java
public void resetModelSafety()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrail;

GoogleCesGuardrail.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrail;

GoogleCesGuardrail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrail;

GoogleCesGuardrail.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrail;

GoogleCesGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCesGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCesGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput">actionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput">codeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput">contentFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput">guardrailIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput">llmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput">llmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput">modelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action"></a>

```java
public GoogleCesGuardrailActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a>

---

##### `codeCallback`<sup>Required</sup> <a name="codeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackOutputReference getCodeCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a>

---

##### `contentFilter`<sup>Required</sup> <a name="contentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter"></a>

```java
public GoogleCesGuardrailContentFilterOutputReference getContentFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `llmPolicy`<sup>Required</sup> <a name="llmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy"></a>

```java
public GoogleCesGuardrailLlmPolicyOutputReference getLlmPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a>

---

##### `llmPromptSecurity`<sup>Required</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityOutputReference getLlmPromptSecurity();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `modelSafety`<sup>Required</sup> <a name="modelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety"></a>

```java
public GoogleCesGuardrailModelSafetyOutputReference getModelSafety();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts"></a>

```java
public GoogleCesGuardrailTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput"></a>

```java
public GoogleCesGuardrailAction getActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `codeCallbackInput`<sup>Optional</sup> <a name="codeCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput"></a>

```java
public GoogleCesGuardrailCodeCallback getCodeCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `contentFilterInput`<sup>Optional</sup> <a name="contentFilterInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput"></a>

```java
public GoogleCesGuardrailContentFilter getContentFilterInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `guardrailIdInput`<sup>Optional</sup> <a name="guardrailIdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput"></a>

```java
public java.lang.String getGuardrailIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `llmPolicyInput`<sup>Optional</sup> <a name="llmPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput"></a>

```java
public GoogleCesGuardrailLlmPolicy getLlmPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `llmPromptSecurityInput`<sup>Optional</sup> <a name="llmPromptSecurityInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput"></a>

```java
public GoogleCesGuardrailLlmPromptSecurity getLlmPromptSecurityInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `modelSafetyInput`<sup>Optional</sup> <a name="modelSafetyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput"></a>

```java
public GoogleCesGuardrailModelSafety getModelSafetyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCesGuardrailTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesGuardrailAction <a name="GoogleCesGuardrailAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailAction;

GoogleCesGuardrailAction.builder()
//  .generativeAnswer(GoogleCesGuardrailActionGenerativeAnswer)
//  .respondImmediately(GoogleCesGuardrailActionRespondImmediately)
//  .transferAgent(GoogleCesGuardrailActionTransferAgent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer">generativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately">respondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent">transferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `generativeAnswer`<sup>Optional</sup> <a name="generativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer"></a>

```java
public GoogleCesGuardrailActionGenerativeAnswer getGenerativeAnswer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}

---

##### `respondImmediately`<sup>Optional</sup> <a name="respondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately"></a>

```java
public GoogleCesGuardrailActionRespondImmediately getRespondImmediately();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}

---

##### `transferAgent`<sup>Optional</sup> <a name="transferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent"></a>

```java
public GoogleCesGuardrailActionTransferAgent getTransferAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}

---

### GoogleCesGuardrailActionGenerativeAnswer <a name="GoogleCesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionGenerativeAnswer;

GoogleCesGuardrailActionGenerativeAnswer.builder()
    .prompt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt">prompt</a></code> | <code>java.lang.String</code> | The prompt to use for the generative answer. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

### GoogleCesGuardrailActionRespondImmediately <a name="GoogleCesGuardrailActionRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionRespondImmediately;

GoogleCesGuardrailActionRespondImmediately.builder()
    .responses(IResolvable|java.util.List<GoogleCesGuardrailActionRespondImmediatelyResponses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses">responses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>></code> | responses block. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses"></a>

```java
public IResolvable|java.util.List<GoogleCesGuardrailActionRespondImmediatelyResponses> getResponses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>>

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}

---

### GoogleCesGuardrailActionRespondImmediatelyResponses <a name="GoogleCesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionRespondImmediatelyResponses;

GoogleCesGuardrailActionRespondImmediatelyResponses.builder()
    .text(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text">text</a></code> | <code>java.lang.String</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#text GoogleCesGuardrail#text}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailActionTransferAgent <a name="GoogleCesGuardrailActionTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionTransferAgent;

GoogleCesGuardrailActionTransferAgent.builder()
    .agent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent">agent</a></code> | <code>java.lang.String</code> | The name of the agent to transfer the conversation to. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}

---

### GoogleCesGuardrailCodeCallback <a name="GoogleCesGuardrailCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallback;

GoogleCesGuardrailCodeCallback.builder()
//  .afterAgentCallback(GoogleCesGuardrailCodeCallbackAfterAgentCallback)
//  .afterModelCallback(GoogleCesGuardrailCodeCallbackAfterModelCallback)
//  .beforeAgentCallback(GoogleCesGuardrailCodeCallbackBeforeAgentCallback)
//  .beforeModelCallback(GoogleCesGuardrailCodeCallbackBeforeModelCallback)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback">afterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback">afterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback">beforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback">beforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `afterAgentCallback`<sup>Optional</sup> <a name="afterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterAgentCallback getAfterAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}

---

##### `afterModelCallback`<sup>Optional</sup> <a name="afterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterModelCallback getAfterModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}

---

##### `beforeAgentCallback`<sup>Optional</sup> <a name="beforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeAgentCallback getBeforeAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}

---

##### `beforeModelCallback`<sup>Optional</sup> <a name="beforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeModelCallback getBeforeModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}

---

### GoogleCesGuardrailCodeCallbackAfterAgentCallback <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback;

GoogleCesGuardrailCodeCallbackAfterAgentCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackAfterModelCallback <a name="GoogleCesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback;

GoogleCesGuardrailCodeCallbackAfterModelCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeAgentCallback <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback;

GoogleCesGuardrailCodeCallbackBeforeAgentCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeModelCallback <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback;

GoogleCesGuardrailCodeCallbackBeforeModelCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailConfig <a name="GoogleCesGuardrailConfig" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailConfig;

GoogleCesGuardrailConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .guardrailId(java.lang.String)
    .location(java.lang.String)
//  .action(GoogleCesGuardrailAction)
//  .codeCallback(GoogleCesGuardrailCodeCallback)
//  .contentFilter(GoogleCesGuardrailContentFilter)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .llmPolicy(GoogleCesGuardrailLlmPolicy)
//  .llmPromptSecurity(GoogleCesGuardrailLlmPromptSecurity)
//  .modelSafety(GoogleCesGuardrailModelSafety)
//  .project(java.lang.String)
//  .timeouts(GoogleCesGuardrailTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action"></a>

```java
public GoogleCesGuardrailAction getAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `codeCallback`<sup>Optional</sup> <a name="codeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback"></a>

```java
public GoogleCesGuardrailCodeCallback getCodeCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `contentFilter`<sup>Optional</sup> <a name="contentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter"></a>

```java
public GoogleCesGuardrailContentFilter getContentFilter();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llmPolicy`<sup>Optional</sup> <a name="llmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy"></a>

```java
public GoogleCesGuardrailLlmPolicy getLlmPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `llmPromptSecurity`<sup>Optional</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity"></a>

```java
public GoogleCesGuardrailLlmPromptSecurity getLlmPromptSecurity();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `modelSafety`<sup>Optional</sup> <a name="modelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety"></a>

```java
public GoogleCesGuardrailModelSafety getModelSafety();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts"></a>

```java
public GoogleCesGuardrailTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

### GoogleCesGuardrailContentFilter <a name="GoogleCesGuardrailContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailContentFilter;

GoogleCesGuardrailContentFilter.builder()
    .matchType(java.lang.String)
//  .bannedContents(java.util.List<java.lang.String>)
//  .bannedContentsInAgentResponse(java.util.List<java.lang.String>)
//  .bannedContentsInUserInput(java.util.List<java.lang.String>)
//  .disregardDiacritics(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents">bannedContents</a></code> | <code>java.util.List<java.lang.String></code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse">bannedContentsInAgentResponse</a></code> | <code>java.util.List<java.lang.String></code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput">bannedContentsInUserInput</a></code> | <code>java.util.List<java.lang.String></code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics">disregardDiacritics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}

---

##### `bannedContents`<sup>Optional</sup> <a name="bannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents"></a>

```java
public java.util.List<java.lang.String> getBannedContents();
```

- *Type:* java.util.List<java.lang.String>

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}

---

##### `bannedContentsInAgentResponse`<sup>Optional</sup> <a name="bannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInAgentResponse();
```

- *Type:* java.util.List<java.lang.String>

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}

---

##### `bannedContentsInUserInput`<sup>Optional</sup> <a name="bannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInUserInput();
```

- *Type:* java.util.List<java.lang.String>

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}

---

##### `disregardDiacritics`<sup>Optional</sup> <a name="disregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics"></a>

```java
public java.lang.Boolean|IResolvable getDisregardDiacritics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}

---

### GoogleCesGuardrailLlmPolicy <a name="GoogleCesGuardrailLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPolicy;

GoogleCesGuardrailLlmPolicy.builder()
    .policyScope(java.lang.String)
    .prompt(java.lang.String)
//  .allowShortUtterance(java.lang.Boolean|IResolvable)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .maxConversationMessages(java.lang.Number)
//  .modelSettings(GoogleCesGuardrailLlmPolicyModelSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt">prompt</a></code> | <code>java.lang.String</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `allowShortUtterance`<sup>Optional</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `maxConversationMessages`<sup>Optional</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings"></a>

```java
public GoogleCesGuardrailLlmPolicyModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPolicyModelSettings <a name="GoogleCesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPolicyModelSettings;

GoogleCesGuardrailLlmPolicyModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurity <a name="GoogleCesGuardrailLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurity;

GoogleCesGuardrailLlmPromptSecurity.builder()
//  .customPolicy(GoogleCesGuardrailLlmPromptSecurityCustomPolicy)
//  .defaultSettings(GoogleCesGuardrailLlmPromptSecurityDefaultSettings)
//  .failOpen(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings">defaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicy getCustomPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}

---

##### `defaultSettings`<sup>Optional</sup> <a name="defaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityDefaultSettings getDefaultSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicy <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy;

GoogleCesGuardrailLlmPromptSecurityCustomPolicy.builder()
    .policyScope(java.lang.String)
    .prompt(java.lang.String)
//  .allowShortUtterance(java.lang.Boolean|IResolvable)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .maxConversationMessages(java.lang.Number)
//  .modelSettings(GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">prompt</a></code> | <code>java.lang.String</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `allowShortUtterance`<sup>Optional</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `maxConversationMessages`<sup>Optional</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings;

GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurityDefaultSettings <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings;

GoogleCesGuardrailLlmPromptSecurityDefaultSettings.builder()
    .build();
```


### GoogleCesGuardrailModelSafety <a name="GoogleCesGuardrailModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailModelSafety;

GoogleCesGuardrailModelSafety.builder()
    .safetySettings(IResolvable|java.util.List<GoogleCesGuardrailModelSafetySafetySettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings">safetySettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>></code> | safety_settings block. |

---

##### `safetySettings`<sup>Required</sup> <a name="safetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings"></a>

```java
public IResolvable|java.util.List<GoogleCesGuardrailModelSafetySafetySettings> getSafetySettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>>

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}

---

### GoogleCesGuardrailModelSafetySafetySettings <a name="GoogleCesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailModelSafetySafetySettings;

GoogleCesGuardrailModelSafetySafetySettings.builder()
    .category(java.lang.String)
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category">category</a></code> | <code>java.lang.String</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold">threshold</a></code> | <code>java.lang.String</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#category GoogleCesGuardrail#category}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#threshold GoogleCesGuardrail#threshold}

---

### GoogleCesGuardrailTimeouts <a name="GoogleCesGuardrailTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailTimeouts;

GoogleCesGuardrailTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesGuardrailActionGenerativeAnswerOutputReference <a name="GoogleCesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference;

new GoogleCesGuardrailActionGenerativeAnswerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">promptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt">prompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```java
public java.lang.String getPromptInput();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailActionGenerativeAnswer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---


### GoogleCesGuardrailActionOutputReference <a name="GoogleCesGuardrailActionOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionOutputReference;

new GoogleCesGuardrailActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer">putGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately">putRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent">putTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer">resetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately">resetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent">resetTransferAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenerativeAnswer` <a name="putGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```java
public void putGenerativeAnswer(GoogleCesGuardrailActionGenerativeAnswer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `putRespondImmediately` <a name="putRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately"></a>

```java
public void putRespondImmediately(GoogleCesGuardrailActionRespondImmediately value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `putTransferAgent` <a name="putTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent"></a>

```java
public void putTransferAgent(GoogleCesGuardrailActionTransferAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `resetGenerativeAnswer` <a name="resetGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```java
public void resetGenerativeAnswer()
```

##### `resetRespondImmediately` <a name="resetRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately"></a>

```java
public void resetRespondImmediately()
```

##### `resetTransferAgent` <a name="resetTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent"></a>

```java
public void resetTransferAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer">generativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately">respondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent">transferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput">generativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput">respondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput">transferAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generativeAnswer`<sup>Required</sup> <a name="generativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer"></a>

```java
public GoogleCesGuardrailActionGenerativeAnswerOutputReference getGenerativeAnswer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `respondImmediately`<sup>Required</sup> <a name="respondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately"></a>

```java
public GoogleCesGuardrailActionRespondImmediatelyOutputReference getRespondImmediately();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `transferAgent`<sup>Required</sup> <a name="transferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent"></a>

```java
public GoogleCesGuardrailActionTransferAgentOutputReference getTransferAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a>

---

##### `generativeAnswerInput`<sup>Optional</sup> <a name="generativeAnswerInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```java
public GoogleCesGuardrailActionGenerativeAnswer getGenerativeAnswerInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `respondImmediatelyInput`<sup>Optional</sup> <a name="respondImmediatelyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```java
public GoogleCesGuardrailActionRespondImmediately getRespondImmediatelyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `transferAgentInput`<sup>Optional</sup> <a name="transferAgentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput"></a>

```java
public GoogleCesGuardrailActionTransferAgent getTransferAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---


### GoogleCesGuardrailActionRespondImmediatelyOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference;

new GoogleCesGuardrailActionRespondImmediatelyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses">putResponses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponses` <a name="putResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```java
public void putResponses(IResolvable|java.util.List<GoogleCesGuardrailActionRespondImmediatelyResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses">responses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">responsesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```java
public GoogleCesGuardrailActionRespondImmediatelyResponsesList getResponses();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `responsesInput`<sup>Optional</sup> <a name="responsesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```java
public IResolvable|java.util.List<GoogleCesGuardrailActionRespondImmediatelyResponses> getResponsesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailActionRespondImmediately getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesList <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList;

new GoogleCesGuardrailActionRespondImmediatelyResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```java
public GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesGuardrailActionRespondImmediatelyResponses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>>

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference;

new GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>

---


### GoogleCesGuardrailActionTransferAgentOutputReference <a name="GoogleCesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailActionTransferAgentOutputReference;

new GoogleCesGuardrailActionTransferAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput">agentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent">agent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```java
public java.lang.String getAgentInput();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailActionTransferAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---


### GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference;

new GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterAgentCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference;

new GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterModelCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference;

new GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeAgentCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference;

new GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeModelCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailCodeCallbackOutputReference;

new GoogleCesGuardrailCodeCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">putAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback">putAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">putBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">putBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">resetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">resetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">resetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">resetBeforeModelCallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAfterAgentCallback` <a name="putAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```java
public void putAfterAgentCallback(GoogleCesGuardrailCodeCallbackAfterAgentCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `putAfterModelCallback` <a name="putAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```java
public void putAfterModelCallback(GoogleCesGuardrailCodeCallbackAfterModelCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `putBeforeAgentCallback` <a name="putBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```java
public void putBeforeAgentCallback(GoogleCesGuardrailCodeCallbackBeforeAgentCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `putBeforeModelCallback` <a name="putBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```java
public void putBeforeModelCallback(GoogleCesGuardrailCodeCallbackBeforeModelCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `resetAfterAgentCallback` <a name="resetAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```java
public void resetAfterAgentCallback()
```

##### `resetAfterModelCallback` <a name="resetAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```java
public void resetAfterModelCallback()
```

##### `resetBeforeAgentCallback` <a name="resetBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```java
public void resetBeforeAgentCallback()
```

##### `resetBeforeModelCallback` <a name="resetBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```java
public void resetBeforeModelCallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">afterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback">afterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">beforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">beforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">afterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">afterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">beforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">beforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterAgentCallback`<sup>Required</sup> <a name="afterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference getAfterAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `afterModelCallback`<sup>Required</sup> <a name="afterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference getAfterModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `beforeAgentCallback`<sup>Required</sup> <a name="beforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference getBeforeAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `beforeModelCallback`<sup>Required</sup> <a name="beforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference getBeforeModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `afterAgentCallbackInput`<sup>Optional</sup> <a name="afterAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterAgentCallback getAfterAgentCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `afterModelCallbackInput`<sup>Optional</sup> <a name="afterModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```java
public GoogleCesGuardrailCodeCallbackAfterModelCallback getAfterModelCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `beforeAgentCallbackInput`<sup>Optional</sup> <a name="beforeAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeAgentCallback getBeforeAgentCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `beforeModelCallbackInput`<sup>Optional</sup> <a name="beforeModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```java
public GoogleCesGuardrailCodeCallbackBeforeModelCallback getBeforeModelCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailCodeCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---


### GoogleCesGuardrailContentFilterOutputReference <a name="GoogleCesGuardrailContentFilterOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailContentFilterOutputReference;

new GoogleCesGuardrailContentFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents">resetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">resetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">resetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics">resetDisregardDiacritics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBannedContents` <a name="resetBannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```java
public void resetBannedContents()
```

##### `resetBannedContentsInAgentResponse` <a name="resetBannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```java
public void resetBannedContentsInAgentResponse()
```

##### `resetBannedContentsInUserInput` <a name="resetBannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```java
public void resetBannedContentsInUserInput()
```

##### `resetDisregardDiacritics` <a name="resetDisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```java
public void resetDisregardDiacritics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">bannedContentsInAgentResponseInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput">bannedContentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">bannedContentsInUserInputInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">disregardDiacriticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents">bannedContents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">bannedContentsInAgentResponse</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">bannedContentsInUserInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics">disregardDiacritics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="bannedContentsInAgentResponseInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInAgentResponseInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInput`<sup>Optional</sup> <a name="bannedContentsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInUserInputInput`<sup>Optional</sup> <a name="bannedContentsInUserInputInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInUserInputInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disregardDiacriticsInput`<sup>Optional</sup> <a name="disregardDiacriticsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisregardDiacriticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `bannedContents`<sup>Required</sup> <a name="bannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```java
public java.util.List<java.lang.String> getBannedContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInAgentResponse`<sup>Required</sup> <a name="bannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInAgentResponse();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInUserInput`<sup>Required</sup> <a name="bannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInUserInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disregardDiacritics`<sup>Required</sup> <a name="disregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```java
public java.lang.Boolean|IResolvable getDisregardDiacritics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailContentFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---


### GoogleCesGuardrailLlmPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference;

new GoogleCesGuardrailLlmPolicyModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailLlmPolicyModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPolicyOutputReference <a name="GoogleCesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPolicyOutputReference;

new GoogleCesGuardrailLlmPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">resetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">resetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```java
public void putModelSettings(GoogleCesGuardrailLlmPolicyModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `resetAllowShortUtterance` <a name="resetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```java
public void resetAllowShortUtterance()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetMaxConversationMessages` <a name="resetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```java
public void resetMaxConversationMessages()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```java
public void resetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">allowShortUtteranceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">maxConversationMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput">policyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput">promptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt">prompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```java
public GoogleCesGuardrailLlmPolicyModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `allowShortUtteranceInput`<sup>Optional</sup> <a name="allowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtteranceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessagesInput`<sup>Optional</sup> <a name="maxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```java
public java.lang.Number getMaxConversationMessagesInput();
```

- *Type:* java.lang.Number

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```java
public GoogleCesGuardrailLlmPolicyModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `policyScopeInput`<sup>Optional</sup> <a name="policyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```java
public java.lang.String getPolicyScopeInput();
```

- *Type:* java.lang.String

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```java
public java.lang.String getPromptInput();
```

- *Type:* java.lang.String

---

##### `allowShortUtterance`<sup>Required</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessages`<sup>Required</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailLlmPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference;

new GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference;

new GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">resetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">resetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```java
public void putModelSettings(GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `resetAllowShortUtterance` <a name="resetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```java
public void resetAllowShortUtterance()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetMaxConversationMessages` <a name="resetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```java
public void resetMaxConversationMessages()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```java
public void resetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">allowShortUtteranceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">maxConversationMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">policyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">promptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">prompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `allowShortUtteranceInput`<sup>Optional</sup> <a name="allowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtteranceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessagesInput`<sup>Optional</sup> <a name="maxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```java
public java.lang.Number getMaxConversationMessagesInput();
```

- *Type:* java.lang.Number

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `policyScopeInput`<sup>Optional</sup> <a name="policyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```java
public java.lang.String getPolicyScopeInput();
```

- *Type:* java.lang.String

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```java
public java.lang.String getPromptInput();
```

- *Type:* java.lang.String

---

##### `allowShortUtterance`<sup>Required</sup> <a name="allowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessages`<sup>Required</sup> <a name="maxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference;

new GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">defaultPromptTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPromptTemplate`<sup>Required</sup> <a name="defaultPromptTemplate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```java
public java.lang.String getDefaultPromptTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityDefaultSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference;

new GoogleCesGuardrailLlmPromptSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">putDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">resetDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```java
public void putCustomPolicy(GoogleCesGuardrailLlmPromptSecurityCustomPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `putDefaultSettings` <a name="putDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```java
public void putDefaultSettings(GoogleCesGuardrailLlmPromptSecurityDefaultSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```java
public void resetCustomPolicy()
```

##### `resetDefaultSettings` <a name="resetDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```java
public void resetDefaultSettings()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">defaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">defaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference getCustomPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `defaultSettings`<sup>Required</sup> <a name="defaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference getDefaultSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityCustomPolicy getCustomPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `defaultSettingsInput`<sup>Optional</sup> <a name="defaultSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```java
public GoogleCesGuardrailLlmPromptSecurityDefaultSettings getDefaultSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailLlmPromptSecurity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---


### GoogleCesGuardrailModelSafetyOutputReference <a name="GoogleCesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailModelSafetyOutputReference;

new GoogleCesGuardrailModelSafetyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings">putSafetySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSafetySettings` <a name="putSafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```java
public void putSafetySettings(IResolvable|java.util.List<GoogleCesGuardrailModelSafetySafetySettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings">safetySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput">safetySettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `safetySettings`<sup>Required</sup> <a name="safetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```java
public GoogleCesGuardrailModelSafetySafetySettingsList getSafetySettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a>

---

##### `safetySettingsInput`<sup>Optional</sup> <a name="safetySettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```java
public IResolvable|java.util.List<GoogleCesGuardrailModelSafetySafetySettings> getSafetySettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```java
public GoogleCesGuardrailModelSafety getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---


### GoogleCesGuardrailModelSafetySafetySettingsList <a name="GoogleCesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailModelSafetySafetySettingsList;

new GoogleCesGuardrailModelSafetySafetySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get"></a>

```java
public GoogleCesGuardrailModelSafetySafetySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesGuardrailModelSafetySafetySettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>>

---


### GoogleCesGuardrailModelSafetySafetySettingsOutputReference <a name="GoogleCesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference;

new GoogleCesGuardrailModelSafetySafetySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesGuardrailModelSafetySafetySettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>

---


### GoogleCesGuardrailTimeoutsOutputReference <a name="GoogleCesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_guardrail.GoogleCesGuardrailTimeoutsOutputReference;

new GoogleCesGuardrailTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesGuardrailTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---



