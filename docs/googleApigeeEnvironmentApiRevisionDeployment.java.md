# `googleApigeeEnvironmentApiRevisionDeployment` Submodule <a name="`googleApigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentApiRevisionDeployment <a name="GoogleApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeployment;

GoogleApigeeEnvironmentApiRevisionDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .api(java.lang.String)
    .environment(java.lang.String)
    .orgId(java.lang.String)
    .revision(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .override(java.lang.Boolean|IResolvable)
//  .sequencedRollout(java.lang.Boolean|IResolvable)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api">api</a></code> | <code>java.lang.String</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision">revision</a></code> | <code>java.lang.Number</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override">override</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout">sequencedRollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api"></a>

- *Type:* java.lang.String

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#api GoogleApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#environment GoogleApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#org_id GoogleApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision"></a>

- *Type:* java.lang.Number

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#revision GoogleApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#deletion_policy GoogleApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#override GoogleApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequencedRollout`<sup>Optional</sup> <a name="sequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#sequenced_rollout GoogleApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#service_account GoogleApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#timeouts GoogleApigeeEnvironmentApiRevisionDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverride">resetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">resetSequencedRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetOverride` <a name="resetOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```java
public void resetOverride()
```

##### `resetSequencedRollout` <a name="resetSequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```java
public void resetSequencedRollout()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeployment;

GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeployment;

GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeployment;

GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeployment;

GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeEnvironmentApiRevisionDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.basepaths">basepaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">deployStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.overrideInput">overrideInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">sequencedRolloutInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.override">override</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">sequencedRollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `basepaths`<sup>Required</sup> <a name="basepaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```java
public java.util.List<java.lang.String> getBasepaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deployStartTime`<sup>Required</sup> <a name="deployStartTime" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```java
public java.lang.String getDeployStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```java
public java.lang.Boolean|IResolvable getOverrideInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `sequencedRolloutInput`<sup>Optional</sup> <a name="sequencedRolloutInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```java
public java.lang.Boolean|IResolvable getSequencedRolloutInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```java
public java.lang.Boolean|IResolvable getOverride();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `sequencedRollout`<sup>Required</sup> <a name="sequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```java
public java.lang.Boolean|IResolvable getSequencedRollout();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentApiRevisionDeploymentConfig <a name="GoogleApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig;

GoogleApigeeEnvironmentApiRevisionDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .api(java.lang.String)
    .environment(java.lang.String)
    .orgId(java.lang.String)
    .revision(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .override(java.lang.Boolean|IResolvable)
//  .sequencedRollout(java.lang.Boolean|IResolvable)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.api">api</a></code> | <code>java.lang.String</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">revision</a></code> | <code>java.lang.Number</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.override">override</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">sequencedRollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#api GoogleApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#environment GoogleApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#org_id GoogleApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#revision GoogleApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#deletion_policy GoogleApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```java
public java.lang.Boolean|IResolvable getOverride();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#override GoogleApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequencedRollout`<sup>Optional</sup> <a name="sequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```java
public java.lang.Boolean|IResolvable getSequencedRollout();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#sequenced_rollout GoogleApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#service_account GoogleApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#timeouts GoogleApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts;

GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_api_revision_deployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference;

new GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



