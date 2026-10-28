# `googleCloudRunV2Instance` Submodule <a name="`googleCloudRunV2Instance` Submodule" id="@cdktn/provider-google-beta.googleCloudRunV2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Instance <a name="GoogleCloudRunV2Instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance google_cloud_run_v2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2Instance(Construct Scope, string Id, GoogleCloudRunV2InstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig">GoogleCloudRunV2InstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig">GoogleCloudRunV2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled">ResetDefaultUriDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction">ResetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration">ResetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled">ResetInvokerIamDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainers` <a name="PutContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers"></a>

```csharp
private void PutContainers(IResolvable|GoogleCloudRunV2InstanceContainers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudRunV2InstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes"></a>

```csharp
private void PutVolumes(IResolvable|GoogleCloudRunV2InstanceVolumes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetClient` <a name="ResetClient" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion"></a>

```csharp
private void ResetClientVersion()
```

##### `ResetDefaultUriDisabled` <a name="ResetDefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled"></a>

```csharp
private void ResetDefaultUriDisabled()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetEncryptionKeyRevocationAction` <a name="ResetEncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction"></a>

```csharp
private void ResetEncryptionKeyRevocationAction()
```

##### `ResetEncryptionKeyShutdownDuration` <a name="ResetEncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration"></a>

```csharp
private void ResetEncryptionKeyShutdownDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress"></a>

```csharp
private void ResetIngress()
```

##### `ResetInvokerIamDisabled` <a name="ResetInvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled"></a>

```csharp
private void ResetInvokerIamDisabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage"></a>

```csharp
private void ResetLaunchStage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy"></a>

```csharp
private void ResetRestartPolicy()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudRunV2Instance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudRunV2Instance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudRunV2Instance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudRunV2Instance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudRunV2Instance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudRunV2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses">ContainerStatuses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier">LastModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri">LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration">ObservedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls">Urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput">ClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput">ClientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput">ContainersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput">DefaultUriDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput">EncryptionKeyRevocationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput">EncryptionKeyShutdownDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput">IngressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput">InvokerIamDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput">LaunchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput">VolumesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client">Client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion">ClientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled">DefaultUriDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress">Ingress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled">InvokerIamDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage">LaunchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy">RestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions"></a>

```csharp
public GoogleCloudRunV2InstanceConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a>

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers"></a>

```csharp
public GoogleCloudRunV2InstanceContainersList Containers { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a>

---

##### `ContainerStatuses`<sup>Required</sup> <a name="ContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses"></a>

```csharp
public GoogleCloudRunV2InstanceContainerStatusesList ContainerStatuses { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `LastModifier`<sup>Required</sup> <a name="LastModifier" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier"></a>

```csharp
public string LastModifier { get; }
```

- *Type:* string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri"></a>

```csharp
public string LogUri { get; }
```

- *Type:* string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration"></a>

```csharp
public string ObservedGeneration { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs"></a>

```csharp
public IResolvable SatisfiesPzs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition"></a>

```csharp
public GoogleCloudRunV2InstanceTerminalConditionList TerminalCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts"></a>

```csharp
public GoogleCloudRunV2InstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls"></a>

```csharp
public string[] Urls { get; }
```

- *Type:* string[]

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput"></a>

```csharp
public string ClientInput { get; }
```

- *Type:* string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput"></a>

```csharp
public string ClientVersionInput { get; }
```

- *Type:* string

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainers[] ContainersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

---

##### `DefaultUriDisabledInput`<sup>Optional</sup> <a name="DefaultUriDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput"></a>

```csharp
public bool|IResolvable DefaultUriDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="EncryptionKeyRevocationActionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput"></a>

```csharp
public string EncryptionKeyRevocationActionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="EncryptionKeyShutdownDurationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput"></a>

```csharp
public string EncryptionKeyShutdownDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput"></a>

```csharp
public string IngressInput { get; }
```

- *Type:* string

---

##### `InvokerIamDisabledInput`<sup>Optional</sup> <a name="InvokerIamDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput"></a>

```csharp
public bool|IResolvable InvokerIamDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput"></a>

```csharp
public string LaunchStageInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput"></a>

```csharp
public string RestartPolicyInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumes[] VolumesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client"></a>

```csharp
public string Client { get; }
```

- *Type:* string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion"></a>

```csharp
public string ClientVersion { get; }
```

- *Type:* string

---

##### `DefaultUriDisabled`<sup>Required</sup> <a name="DefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled"></a>

```csharp
public bool|IResolvable DefaultUriDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `EncryptionKeyRevocationAction`<sup>Required</sup> <a name="EncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction"></a>

```csharp
public string EncryptionKeyRevocationAction { get; }
```

- *Type:* string

---

##### `EncryptionKeyShutdownDuration`<sup>Required</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration"></a>

```csharp
public string EncryptionKeyShutdownDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress"></a>

```csharp
public string Ingress { get; }
```

- *Type:* string

---

##### `InvokerIamDisabled`<sup>Required</sup> <a name="InvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled"></a>

```csharp
public bool|IResolvable InvokerIamDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage"></a>

```csharp
public string LaunchStage { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy"></a>

```csharp
public string RestartPolicy { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2InstanceConditions <a name="GoogleCloudRunV2InstanceConditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceConditions {

};
```


### GoogleCloudRunV2InstanceConfig <a name="GoogleCloudRunV2InstanceConfig" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GoogleCloudRunV2InstanceContainers[] Containers,
    string Location,
    string Name,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string Client = null,
    string ClientVersion = null,
    bool|IResolvable DefaultUriDisabled = null,
    string DeletionPolicy = null,
    string EncryptionKey = null,
    string EncryptionKeyRevocationAction = null,
    string EncryptionKeyShutdownDuration = null,
    string Id = null,
    string Ingress = null,
    bool|IResolvable InvokerIamDisabled = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LaunchStage = null,
    string Project = null,
    string RestartPolicy = null,
    string ServiceAccount = null,
    GoogleCloudRunV2InstanceTimeouts Timeouts = null,
    IResolvable|GoogleCloudRunV2InstanceVolumes[] Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers">Containers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location">Location</a></code> | <code>string</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name">Name</a></code> | <code>string</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client">Client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion">ClientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled">DefaultUriDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>string</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>string</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress">Ingress</a></code> | <code>string</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled">InvokerIamDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage">LaunchStage</a></code> | <code>string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy">RestartPolicy</a></code> | <code>string</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes">Volumes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]</code> | volumes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainers[] Containers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client"></a>

```csharp
public string Client { get; set; }
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion"></a>

```csharp
public string ClientVersion { get; set; }
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `DefaultUriDisabled`<sup>Optional</sup> <a name="DefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled"></a>

```csharp
public bool|IResolvable DefaultUriDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `EncryptionKeyRevocationAction`<sup>Optional</sup> <a name="EncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction"></a>

```csharp
public string EncryptionKeyRevocationAction { get; set; }
```

- *Type:* string

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `EncryptionKeyShutdownDuration`<sup>Optional</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration"></a>

```csharp
public string EncryptionKeyShutdownDuration { get; set; }
```

- *Type:* string

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress"></a>

```csharp
public string Ingress { get; set; }
```

- *Type:* string

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `InvokerIamDisabled`<sup>Optional</sup> <a name="InvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled"></a>

```csharp
public bool|IResolvable InvokerIamDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage"></a>

```csharp
public string LaunchStage { get; set; }
```

- *Type:* string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy"></a>

```csharp
public string RestartPolicy { get; set; }
```

- *Type:* string

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service_account GoogleCloudRunV2Instance#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts"></a>

```csharp
public GoogleCloudRunV2InstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeouts GoogleCloudRunV2Instance#timeouts}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumes[] Volumes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

### GoogleCloudRunV2InstanceContainers <a name="GoogleCloudRunV2InstanceContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainers {
    string Image,
    string[] Args = null,
    string[] Command = null,
    IResolvable|GoogleCloudRunV2InstanceContainersEnv[] Env = null,
    GoogleCloudRunV2InstanceContainersLivenessProbe LivenessProbe = null,
    string Name = null,
    IResolvable|GoogleCloudRunV2InstanceContainersPorts[] Ports = null,
    GoogleCloudRunV2InstanceContainersResources Resources = null,
    GoogleCloudRunV2InstanceContainersStartupProbe StartupProbe = null,
    IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts[] VolumeMounts = null,
    string WorkingDir = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image">Image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args">Args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command">Command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name">Name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports">Ports</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts">VolumeMounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir">WorkingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#image GoogleCloudRunV2Instance#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#args GoogleCloudRunV2Instance#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#command GoogleCloudRunV2Instance#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#env GoogleCloudRunV2Instance#env}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbe LivenessProbe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#liveness_probe GoogleCloudRunV2Instance#liveness_probe}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersPorts[] Ports { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ports GoogleCloudRunV2Instance#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources"></a>

```csharp
public GoogleCloudRunV2InstanceContainersResources Resources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#resources GoogleCloudRunV2Instance#resources}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbe StartupProbe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#startup_probe GoogleCloudRunV2Instance#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts[] VolumeMounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volume_mounts GoogleCloudRunV2Instance#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir"></a>

```csharp
public string WorkingDir { get; set; }
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#working_dir GoogleCloudRunV2Instance#working_dir}

---

### GoogleCloudRunV2InstanceContainersEnv <a name="GoogleCloudRunV2InstanceContainersEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnv {
    string Name,
    string Value = null,
    GoogleCloudRunV2InstanceContainersEnvValueSource ValueSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value">Value</a></code> | <code>string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSource ValueSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value_source GoogleCloudRunV2Instance#value_source}

---

### GoogleCloudRunV2InstanceContainersEnvValueSource <a name="GoogleCloudRunV2InstanceContainersEnvValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnvValueSource {
    GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef SecretKeyRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef SecretKeyRef { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret_key_ref GoogleCloudRunV2Instance#secret_key_ref}

---

### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef {
    string Secret,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

### GoogleCloudRunV2InstanceContainersLivenessProbe <a name="GoogleCloudRunV2InstanceContainersLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbe {
    double FailureThreshold = null,
    GoogleCloudRunV2InstanceContainersLivenessProbeGrpc Grpc = null,
    GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet HttpGet = null,
    double InitialDelaySeconds = null,
    double PeriodSeconds = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Optional. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpc Grpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet HttpGet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; set; }
```

- *Type:* double

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeGrpc <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeGrpc {
    double Port = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port">Port</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service">Service</a></code> | <code>string</code> | Optional. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet {
    IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[] HttpHeaders = null,
    string Path = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path">Path</a></code> | <code>string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port">Port</a></code> | <code>double</code> | Optional. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[] HttpHeaders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>string</code> | Optional. The header field value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersPorts <a name="GoogleCloudRunV2InstanceContainersPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersPorts {
    double ContainerPort = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort">ContainerPort</a></code> | <code>double</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name">Name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#container_port GoogleCloudRunV2Instance#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

### GoogleCloudRunV2InstanceContainersResources <a name="GoogleCloudRunV2InstanceContainersResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersResources {
    System.Collections.Generic.IDictionary<string, string> Limits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Only memory and CPU are supported. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#limits GoogleCloudRunV2Instance#limits}

---

### GoogleCloudRunV2InstanceContainersStartupProbe <a name="GoogleCloudRunV2InstanceContainersStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbe {
    double FailureThreshold = null,
    GoogleCloudRunV2InstanceContainersStartupProbeGrpc Grpc = null,
    GoogleCloudRunV2InstanceContainersStartupProbeHttpGet HttpGet = null,
    double InitialDelaySeconds = null,
    double PeriodSeconds = null,
    GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket TcpSocket = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Optional. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeGrpc Grpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGet HttpGet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; set; }
```

- *Type:* double

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket TcpSocket { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#tcp_socket GoogleCloudRunV2Instance#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersStartupProbeGrpc <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeGrpc {
    double Port = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port">Port</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service">Service</a></code> | <code>string</code> | Optional. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGet {
    IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[] HttpHeaders = null,
    string Path = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path">Path</a></code> | <code>string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port">Port</a></code> | <code>double</code> | Optional. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[] HttpHeaders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>string</code> | Optional. The header field value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket {
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port">Port</a></code> | <code>double</code> | Optional. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainerStatuses <a name="GoogleCloudRunV2InstanceContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainerStatuses {

};
```


### GoogleCloudRunV2InstanceContainersVolumeMounts <a name="GoogleCloudRunV2InstanceContainersVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersVolumeMounts {
    string MountPath,
    string Name,
    string SubPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name">Name</a></code> | <code>string</code> | This must match the Name of a Volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath">SubPath</a></code> | <code>string</code> | Path within the volume from which the container's volume should be mounted. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_path GoogleCloudRunV2Instance#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath"></a>

```csharp
public string SubPath { get; set; }
```

- *Type:* string

Path within the volume from which the container's volume should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#sub_path GoogleCloudRunV2Instance#sub_path}

---

### GoogleCloudRunV2InstanceTerminalCondition <a name="GoogleCloudRunV2InstanceTerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceTerminalCondition {

};
```


### GoogleCloudRunV2InstanceTimeouts <a name="GoogleCloudRunV2InstanceTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}.

---

### GoogleCloudRunV2InstanceVolumes <a name="GoogleCloudRunV2InstanceVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumes {
    string Name,
    GoogleCloudRunV2InstanceVolumesCloudSqlInstance CloudSqlInstance = null,
    GoogleCloudRunV2InstanceVolumesEmptyDir EmptyDir = null,
    GoogleCloudRunV2InstanceVolumesGcs Gcs = null,
    GoogleCloudRunV2InstanceVolumesNfs Nfs = null,
    GoogleCloudRunV2InstanceVolumesSecret Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name">Name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs">Gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesCloudSqlInstance CloudSqlInstance { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#cloud_sql_instance GoogleCloudRunV2Instance#cloud_sql_instance}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesEmptyDir EmptyDir { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#empty_dir GoogleCloudRunV2Instance#empty_dir}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesGcs Gcs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#gcs GoogleCloudRunV2Instance#gcs}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesNfs Nfs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#nfs GoogleCloudRunV2Instance#nfs}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesSecret Secret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

### GoogleCloudRunV2InstanceVolumesCloudSqlInstance <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesCloudSqlInstance {
    string[] Instances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#instances GoogleCloudRunV2Instance#instances}

---

### GoogleCloudRunV2InstanceVolumesEmptyDir <a name="GoogleCloudRunV2InstanceVolumesEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesEmptyDir {
    string Medium = null,
    string SizeLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium">Medium</a></code> | <code>string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium"></a>

```csharp
public string Medium { get; set; }
```

- *Type:* string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#medium GoogleCloudRunV2Instance#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit"></a>

```csharp
public string SizeLimit { get; set; }
```

- *Type:* string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#size_limit GoogleCloudRunV2Instance#size_limit}

---

### GoogleCloudRunV2InstanceVolumesGcs <a name="GoogleCloudRunV2InstanceVolumesGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesGcs {
    string Bucket,
    string[] MountOptions = null,
    bool|IResolvable ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket">Bucket</a></code> | <code>string</code> | GCS Bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, mount the GCS bucket as read-only. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#bucket GoogleCloudRunV2Instance#bucket}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; set; }
```

- *Type:* string[]

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_options GoogleCloudRunV2Instance#mount_options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesNfs <a name="GoogleCloudRunV2InstanceVolumesNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesNfs {
    string Path,
    string Server,
    bool|IResolvable ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path">Path</a></code> | <code>string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server">Server</a></code> | <code>string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, mount the NFS volume as read only. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#server GoogleCloudRunV2Instance#server}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesSecret <a name="GoogleCloudRunV2InstanceVolumesSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesSecret {
    string Secret,
    double DefaultMode = null,
    IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret">Secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>double</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items">Items</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode"></a>

```csharp
public double DefaultMode { get; set; }
```

- *Type:* double

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_mode GoogleCloudRunV2Instance#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems[] Items { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#items GoogleCloudRunV2Instance#items}

---

### GoogleCloudRunV2InstanceVolumesSecretItems <a name="GoogleCloudRunV2InstanceVolumesSecretItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesSecretItems {
    string Path,
    double Mode = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path">Path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode">Mode</a></code> | <code>double</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version">Version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode"></a>

```csharp
public double Mode { get; set; }
```

- *Type:* double

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mode GoogleCloudRunV2Instance#mode}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2InstanceConditionsList <a name="GoogleCloudRunV2InstanceConditionsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get"></a>

```csharp
private GoogleCloudRunV2InstanceConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudRunV2InstanceConditionsOutputReference <a name="GoogleCloudRunV2InstanceConditionsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason">InstanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceReason`<sup>Required</sup> <a name="InstanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason"></a>

```csharp
public string InstanceReason { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a>

---


### GoogleCloudRunV2InstanceContainersEnvList <a name="GoogleCloudRunV2InstanceContainersEnvList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainersEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

---


### GoogleCloudRunV2InstanceContainersEnvOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource"></a>

```csharp
private void PutValueSource(GoogleCloudRunV2InstanceContainersEnvValueSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource"></a>

```csharp
private void ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference ValueSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSource ValueSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```csharp
private void PutSecretKeyRef(GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```csharp
private void ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference SecretKeyRef { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef SecretKeyRefInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2InstanceContainersList <a name="GoogleCloudRunV2InstanceContainersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>[]

---


### GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpc InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```csharp
private void PutHttpHeaders(IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList HttpHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[] HttpHeadersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc"></a>

```csharp
private void PutGrpc(GoogleCloudRunV2InstanceContainersLivenessProbeGrpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet"></a>

```csharp
private void PutHttpGet(GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc"></a>

```csharp
private void ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet"></a>

```csharp
private void ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```csharp
private void ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference Grpc { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference HttpGet { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpc GrpcInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet HttpGetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```csharp
public double InitialDelaySecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---


### GoogleCloudRunV2InstanceContainersOutputReference <a name="GoogleCloudRunV2InstanceContainersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|GoogleCloudRunV2InstanceContainersEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe"></a>

```csharp
private void PutLivenessProbe(GoogleCloudRunV2InstanceContainersLivenessProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|GoogleCloudRunV2InstanceContainersPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources"></a>

```csharp
private void PutResources(GoogleCloudRunV2InstanceContainersResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe"></a>

```csharp
private void PutStartupProbe(GoogleCloudRunV2InstanceContainersStartupProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts"></a>

```csharp
private void PutVolumeMounts(IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe"></a>

```csharp
private void ResetLivenessProbe()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe"></a>

```csharp
private void ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts"></a>

```csharp
private void ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir"></a>

```csharp
private void ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env"></a>

```csharp
public GoogleCloudRunV2InstanceContainersEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a>

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference LivenessProbe { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports"></a>

```csharp
public GoogleCloudRunV2InstanceContainersPortsList Ports { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources"></a>

```csharp
public GoogleCloudRunV2InstanceContainersResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeOutputReference StartupProbe { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts"></a>

```csharp
public GoogleCloudRunV2InstanceContainersVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>[]

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersLivenessProbe LivenessProbeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersPorts[] PortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbe StartupProbeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts[] VolumeMountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput"></a>

```csharp
public string WorkingDirInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir"></a>

```csharp
public string WorkingDir { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>

---


### GoogleCloudRunV2InstanceContainersPortsList <a name="GoogleCloudRunV2InstanceContainersPortsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainersPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>[]

---


### GoogleCloudRunV2InstanceContainersPortsOutputReference <a name="GoogleCloudRunV2InstanceContainersPortsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>

---


### GoogleCloudRunV2InstanceContainersResourcesOutputReference <a name="GoogleCloudRunV2InstanceContainersResourcesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LimitsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeGrpc InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```csharp
private void PutHttpHeaders(IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList HttpHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[] HttpHeadersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc"></a>

```csharp
private void PutGrpc(GoogleCloudRunV2InstanceContainersStartupProbeGrpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet"></a>

```csharp
private void PutHttpGet(GoogleCloudRunV2InstanceContainersStartupProbeHttpGet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket"></a>

```csharp
private void PutTcpSocket(GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc"></a>

```csharp
private void ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet"></a>

```csharp
private void ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```csharp
private void ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket"></a>

```csharp
private void ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference Grpc { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference HttpGet { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference TcpSocket { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeGrpc GrpcInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGet HttpGetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```csharp
public double InitialDelaySecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket TcpSocketInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2InstanceContainerStatusesList <a name="GoogleCloudRunV2InstanceContainerStatusesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainerStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainerStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudRunV2InstanceContainerStatusesOutputReference <a name="GoogleCloudRunV2InstanceContainerStatusesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainerStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceContainerStatuses InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a>

---


### GoogleCloudRunV2InstanceContainersVolumeMountsList <a name="GoogleCloudRunV2InstanceContainersVolumeMountsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get"></a>

```csharp
private GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>[]

---


### GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath">ResetSubPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubPath` <a name="ResetSubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```csharp
private void ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```csharp
public string SubPathInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```csharp
public string SubPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>

---


### GoogleCloudRunV2InstanceTerminalConditionList <a name="GoogleCloudRunV2InstanceTerminalConditionList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceTerminalConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get"></a>

```csharp
private GoogleCloudRunV2InstanceTerminalConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudRunV2InstanceTerminalConditionOutputReference <a name="GoogleCloudRunV2InstanceTerminalConditionOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceTerminalConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason">InstanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceReason`<sup>Required</sup> <a name="InstanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason"></a>

```csharp
public string InstanceReason { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceTerminalCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a>

---


### GoogleCloudRunV2InstanceTimeoutsOutputReference <a name="GoogleCloudRunV2InstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---


### GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesCloudSqlInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium"></a>

```csharp
private void ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```csharp
private void ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput"></a>

```csharp
public string MediumInput { get; }
```

- *Type:* string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```csharp
public string SizeLimitInput { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```csharp
public string SizeLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesEmptyDir InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---


### GoogleCloudRunV2InstanceVolumesGcsOutputReference <a name="GoogleCloudRunV2InstanceVolumesGcsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesGcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput"></a>

```csharp
public string[] MountOptionsInput { get; }
```

- *Type:* string[]

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; }
```

- *Type:* string[]

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesGcs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---


### GoogleCloudRunV2InstanceVolumesList <a name="GoogleCloudRunV2InstanceVolumesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get"></a>

```csharp
private GoogleCloudRunV2InstanceVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>[]

---


### GoogleCloudRunV2InstanceVolumesNfsOutputReference <a name="GoogleCloudRunV2InstanceVolumesNfsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesNfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesNfs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---


### GoogleCloudRunV2InstanceVolumesOutputReference <a name="GoogleCloudRunV2InstanceVolumesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance"></a>

```csharp
private void PutCloudSqlInstance(GoogleCloudRunV2InstanceVolumesCloudSqlInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir"></a>

```csharp
private void PutEmptyDir(GoogleCloudRunV2InstanceVolumesEmptyDir Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs"></a>

```csharp
private void PutGcs(GoogleCloudRunV2InstanceVolumesGcs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs"></a>

```csharp
private void PutNfs(GoogleCloudRunV2InstanceVolumesNfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret"></a>

```csharp
private void PutSecret(GoogleCloudRunV2InstanceVolumesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir"></a>

```csharp
private void ResetEmptyDir()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs"></a>

```csharp
private void ResetGcs()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs"></a>

```csharp
private void ResetNfs()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference CloudSqlInstance { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference EmptyDir { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesGcsOutputReference Gcs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesNfsOutputReference Nfs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesSecretOutputReference Secret { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesCloudSqlInstance CloudSqlInstanceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesEmptyDir EmptyDirInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesGcs GcsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesNfs NfsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesSecret SecretInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>

---


### GoogleCloudRunV2InstanceVolumesSecretItemsList <a name="GoogleCloudRunV2InstanceVolumesSecretItemsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesSecretItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get"></a>

```csharp
private GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

---


### GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput"></a>

```csharp
public double ModeInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode"></a>

```csharp
public double Mode { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>

---


### GoogleCloudRunV2InstanceVolumesSecretOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudRunV2InstanceVolumesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems"></a>

```csharp
private void PutItems(IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode"></a>

```csharp
private void ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesSecretItemsList Items { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput"></a>

```csharp
public double DefaultModeInput { get; }
```

- *Type:* double

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput"></a>

```csharp
public IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems[] ItemsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>[]

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode"></a>

```csharp
public double DefaultMode { get; }
```

- *Type:* double

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2InstanceVolumesSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---



