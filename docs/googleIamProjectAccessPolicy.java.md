# `googleIamProjectAccessPolicy` Submodule <a name="`googleIamProjectAccessPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamProjectAccessPolicy <a name="GoogleIamProjectAccessPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy google_iam_project_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicy;

GoogleIamProjectAccessPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPolicyId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .details(GoogleIamProjectAccessPolicyDetails)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIamProjectAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.accessPolicyId"></a>

- *Type:* java.lang.String

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#access_policy_id GoogleIamProjectAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#location GoogleIamProjectAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#annotations GoogleIamProjectAccessPolicy#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#deletion_policy GoogleIamProjectAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#details GoogleIamProjectAccessPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#display_name GoogleIamProjectAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#timeouts GoogleIamProjectAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails"></a>

```java
public void putDetails(GoogleIamProjectAccessPolicyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleIamProjectAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDetails"></a>

```java
public void resetDetails()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamProjectAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicy;

GoogleIamProjectAccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicy;

GoogleIamProjectAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicy;

GoogleIamProjectAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicy;

GoogleIamProjectAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIamProjectAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIamProjectAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIamProjectAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIamProjectAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamProjectAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference">GoogleIamProjectAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference">GoogleIamProjectAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyIdInput">accessPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.details"></a>

```java
public GoogleIamProjectAccessPolicyDetailsOutputReference getDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference">GoogleIamProjectAccessPolicyDetailsOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeouts"></a>

```java
public GoogleIamProjectAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference">GoogleIamProjectAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessPolicyIdInput`<sup>Optional</sup> <a name="accessPolicyIdInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyIdInput"></a>

```java
public java.lang.String getAccessPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.detailsInput"></a>

```java
public GoogleIamProjectAccessPolicyDetails getDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleIamProjectAccessPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamProjectAccessPolicyConfig <a name="GoogleIamProjectAccessPolicyConfig" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyConfig;

GoogleIamProjectAccessPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPolicyId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .details(GoogleIamProjectAccessPolicyDetails)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIamProjectAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#access_policy_id GoogleIamProjectAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#location GoogleIamProjectAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#annotations GoogleIamProjectAccessPolicy#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#deletion_policy GoogleIamProjectAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.details"></a>

```java
public GoogleIamProjectAccessPolicyDetails getDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#details GoogleIamProjectAccessPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#display_name GoogleIamProjectAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.timeouts"></a>

```java
public GoogleIamProjectAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#timeouts GoogleIamProjectAccessPolicy#timeouts}

---

### GoogleIamProjectAccessPolicyDetails <a name="GoogleIamProjectAccessPolicyDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetails;

GoogleIamProjectAccessPolicyDetails.builder()
    .rules(IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>></code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.property.rules"></a>

```java
public IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#rules GoogleIamProjectAccessPolicy#rules}

---

### GoogleIamProjectAccessPolicyDetailsRules <a name="GoogleIamProjectAccessPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRules;

GoogleIamProjectAccessPolicyDetailsRules.builder()
    .effect(java.lang.String)
    .operation(GoogleIamProjectAccessPolicyDetailsRulesOperation)
    .principals(java.util.List<java.lang.String>)
//  .conditions(IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRulesConditions>)
//  .description(java.lang.String)
//  .excludedPrincipals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>java.lang.String</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.description">description</a></code> | <code>java.lang.String</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.excludedPrincipals">excludedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#effect GoogleIamProjectAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.operation"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesOperation getOperation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#operation GoogleIamProjectAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#principals GoogleIamProjectAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.conditions"></a>

```java
public IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRulesConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#conditions GoogleIamProjectAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#description GoogleIamProjectAccessPolicy#description}

---

##### `excludedPrincipals`<sup>Optional</sup> <a name="excludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```java
public java.util.List<java.lang.String> getExcludedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#excluded_principals GoogleIamProjectAccessPolicy#excluded_principals}

---

### GoogleIamProjectAccessPolicyDetailsRulesConditions <a name="GoogleIamProjectAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesConditions;

GoogleIamProjectAccessPolicyDetailsRulesConditions.builder()
    .service(java.lang.String)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#service GoogleIamProjectAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#service GoogleIamProjectAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#expression GoogleIamProjectAccessPolicy#expression}

---

### GoogleIamProjectAccessPolicyDetailsRulesOperation <a name="GoogleIamProjectAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesOperation;

GoogleIamProjectAccessPolicyDetailsRulesOperation.builder()
    .permissions(java.util.List<java.lang.String>)
//  .excludedPermissions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions">excludedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#permissions GoogleIamProjectAccessPolicy#permissions}

---

##### `excludedPermissions`<sup>Optional</sup> <a name="excludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```java
public java.util.List<java.lang.String> getExcludedPermissions();
```

- *Type:* java.util.List<java.lang.String>

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#excluded_permissions GoogleIamProjectAccessPolicy#excluded_permissions}

---

### GoogleIamProjectAccessPolicyTimeouts <a name="GoogleIamProjectAccessPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyTimeouts;

GoogleIamProjectAccessPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#create GoogleIamProjectAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#delete GoogleIamProjectAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#update GoogleIamProjectAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#create GoogleIamProjectAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#delete GoogleIamProjectAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_project_access_policy#update GoogleIamProjectAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamProjectAccessPolicyDetailsOutputReference <a name="GoogleIamProjectAccessPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsOutputReference;

new GoogleIamProjectAccessPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList">GoogleIamProjectAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rules"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList">GoogleIamProjectAccessPolicyDetailsRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.internalValue"></a>

```java
public GoogleIamProjectAccessPolicyDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesConditionsList <a name="GoogleIamProjectAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList;

new GoogleIamProjectAccessPolicyDetailsRulesConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRulesConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>>

---


### GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference;

new GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesList <a name="GoogleIamProjectAccessPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesList;

new GoogleIamProjectAccessPolicyDetailsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>>

---


### GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference;

new GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">resetExcludedPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedPermissions` <a name="resetExcludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```java
public void resetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excludedPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excludedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedPermissionsInput`<sup>Optional</sup> <a name="excludedPermissionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedPermissions`<sup>Required</sup> <a name="excludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```java
public java.util.List<java.lang.String> getExcludedPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesOperation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference;

new GoogleIamProjectAccessPolicyDetailsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation">putOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">resetExcludedPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRulesConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>>

---

##### `putOperation` <a name="putOperation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```java
public void putOperation(GoogleIamProjectAccessPolicyDetailsRulesOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludedPrincipals` <a name="resetExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```java
public void resetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList">GoogleIamProjectAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference">GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excludedPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput">operationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excludedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList">GoogleIamProjectAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference getOperation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference">GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<GoogleIamProjectAccessPolicyDetailsRulesConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `excludedPrincipalsInput`<sup>Optional</sup> <a name="excludedPrincipalsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```java
public GoogleIamProjectAccessPolicyDetailsRulesOperation getOperationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `excludedPrincipals`<sup>Required</sup> <a name="excludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```java
public java.util.List<java.lang.String> getExcludedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIamProjectAccessPolicyDetailsRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>

---


### GoogleIamProjectAccessPolicyTimeoutsOutputReference <a name="GoogleIamProjectAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_project_access_policy.GoogleIamProjectAccessPolicyTimeoutsOutputReference;

new GoogleIamProjectAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIamProjectAccessPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---



