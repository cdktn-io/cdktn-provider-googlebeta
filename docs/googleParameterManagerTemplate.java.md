# `googleParameterManagerTemplate` Submodule <a name="`googleParameterManagerTemplate` Submodule" id="@cdktn/provider-google-beta.googleParameterManagerTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerTemplate <a name="GoogleParameterManagerTemplate" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template google_parameter_manager_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplate;

GoogleParameterManagerTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .templateId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleParameterManagerTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format type of the template resource. Default value: "TEMPLATE_FORMAT_YAML" Possible values: ["TEMPLATE_FORMAT_YAML", "TEMPLATE_FORMAT_JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#id GoogleParameterManagerTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels assigned to this Template. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#project GoogleParameterManagerTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#template_id GoogleParameterManagerTemplate#template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#deletion_policy GoogleParameterManagerTemplate#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format type of the template resource. Default value: "TEMPLATE_FORMAT_YAML" Possible values: ["TEMPLATE_FORMAT_YAML", "TEMPLATE_FORMAT_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#format GoogleParameterManagerTemplate#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#id GoogleParameterManagerTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels assigned to this Template.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#labels GoogleParameterManagerTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#project GoogleParameterManagerTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#timeouts GoogleParameterManagerTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleParameterManagerTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleParameterManagerTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplate;

GoogleParameterManagerTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplate;

GoogleParameterManagerTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplate;

GoogleParameterManagerTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplate;

GoogleParameterManagerTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleParameterManagerTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleParameterManagerTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleParameterManagerTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleParameterManagerTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference">GoogleParameterManagerTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.timeouts"></a>

```java
public GoogleParameterManagerTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference">GoogleParameterManagerTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.timeoutsInput"></a>

```java
public IResolvable|GoogleParameterManagerTemplateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerTemplateConfig <a name="GoogleParameterManagerTemplateConfig" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplateConfig;

GoogleParameterManagerTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .templateId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleParameterManagerTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format type of the template resource. Default value: "TEMPLATE_FORMAT_YAML" Possible values: ["TEMPLATE_FORMAT_YAML", "TEMPLATE_FORMAT_JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#id GoogleParameterManagerTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels assigned to this Template. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#project GoogleParameterManagerTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#template_id GoogleParameterManagerTemplate#template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#deletion_policy GoogleParameterManagerTemplate#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format type of the template resource. Default value: "TEMPLATE_FORMAT_YAML" Possible values: ["TEMPLATE_FORMAT_YAML", "TEMPLATE_FORMAT_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#format GoogleParameterManagerTemplate#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#id GoogleParameterManagerTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels assigned to this Template.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#labels GoogleParameterManagerTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#project GoogleParameterManagerTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateConfig.property.timeouts"></a>

```java
public GoogleParameterManagerTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#timeouts GoogleParameterManagerTemplate#timeouts}

---

### GoogleParameterManagerTemplateTimeouts <a name="GoogleParameterManagerTemplateTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplateTimeouts;

GoogleParameterManagerTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#create GoogleParameterManagerTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#delete GoogleParameterManagerTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#update GoogleParameterManagerTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#create GoogleParameterManagerTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#delete GoogleParameterManagerTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_parameter_manager_template#update GoogleParameterManagerTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerTemplateTimeoutsOutputReference <a name="GoogleParameterManagerTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_template.GoogleParameterManagerTemplateTimeoutsOutputReference;

new GoogleParameterManagerTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleParameterManagerTemplateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleParameterManagerTemplate.GoogleParameterManagerTemplateTimeouts">GoogleParameterManagerTemplateTimeouts</a>

---



