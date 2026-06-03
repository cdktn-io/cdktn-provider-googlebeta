# `googleCloudbuildWorkerPool` Submodule <a name="`googleCloudbuildWorkerPool` Submodule" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildWorkerPool <a name="GoogleCloudbuildWorkerPool" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPool(Construct Scope, string Id, GoogleCloudbuildWorkerPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig">GoogleCloudbuildWorkerPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig">GoogleCloudbuildWorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect">PutPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig">PutWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetPrivateServiceConnect">ResetPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetWorkerConfig">ResetWorkerConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GoogleCloudbuildWorkerPoolNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---

##### `PutPrivateServiceConnect` <a name="PutPrivateServiceConnect" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect"></a>

```csharp
private void PutPrivateServiceConnect(GoogleCloudbuildWorkerPoolPrivateServiceConnect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudbuildWorkerPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

---

##### `PutWorkerConfig` <a name="PutWorkerConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig"></a>

```csharp
private void PutWorkerConfig(GoogleCloudbuildWorkerPoolWorkerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetPrivateServiceConnect` <a name="ResetPrivateServiceConnect" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetPrivateServiceConnect"></a>

```csharp
private void ResetPrivateServiceConnect()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkerConfig` <a name="ResetWorkerConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetWorkerConfig"></a>

```csharp
private void ResetWorkerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudbuildWorkerPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudbuildWorkerPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudbuildWorkerPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudbuildWorkerPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudbuildWorkerPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference">GoogleCloudbuildWorkerPoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnect">PrivateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference">GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference">GoogleCloudbuildWorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference">GoogleCloudbuildWorkerPoolWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnectInput">PrivateServiceConnectInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfigInput">WorkerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfig"></a>

```csharp
public GoogleCloudbuildWorkerPoolNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference">GoogleCloudbuildWorkerPoolNetworkConfigOutputReference</a>

---

##### `PrivateServiceConnect`<sup>Required</sup> <a name="PrivateServiceConnect" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```csharp
public GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference PrivateServiceConnect { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference">GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeouts"></a>

```csharp
public GoogleCloudbuildWorkerPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference">GoogleCloudbuildWorkerPoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfig"></a>

```csharp
public GoogleCloudbuildWorkerPoolWorkerConfigOutputReference WorkerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference">GoogleCloudbuildWorkerPoolWorkerConfigOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfigInput"></a>

```csharp
public GoogleCloudbuildWorkerPoolNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---

##### `PrivateServiceConnectInput`<sup>Optional</sup> <a name="PrivateServiceConnectInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnectInput"></a>

```csharp
public GoogleCloudbuildWorkerPoolPrivateServiceConnect PrivateServiceConnectInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCloudbuildWorkerPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

---

##### `WorkerConfigInput`<sup>Optional</sup> <a name="WorkerConfigInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfigInput"></a>

```csharp
public GoogleCloudbuildWorkerPoolWorkerConfig WorkerConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildWorkerPoolConfig <a name="GoogleCloudbuildWorkerPoolConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    GoogleCloudbuildWorkerPoolNetworkConfig NetworkConfig = null,
    GoogleCloudbuildWorkerPoolPrivateServiceConnect PrivateServiceConnect = null,
    string Project = null,
    GoogleCloudbuildWorkerPoolTimeouts Timeouts = null,
    GoogleCloudbuildWorkerPoolWorkerConfig WorkerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.name">Name</a></code> | <code>string</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.privateServiceConnect">PrivateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#location GoogleCloudbuildWorkerPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#name GoogleCloudbuildWorkerPool#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#annotations GoogleCloudbuildWorkerPool#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#deletion_policy GoogleCloudbuildWorkerPool#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#display_name GoogleCloudbuildWorkerPool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.networkConfig"></a>

```csharp
public GoogleCloudbuildWorkerPoolNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#network_config GoogleCloudbuildWorkerPool#network_config}

---

##### `PrivateServiceConnect`<sup>Optional</sup> <a name="PrivateServiceConnect" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.privateServiceConnect"></a>

```csharp
public GoogleCloudbuildWorkerPoolPrivateServiceConnect PrivateServiceConnect { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#private_service_connect GoogleCloudbuildWorkerPool#private_service_connect}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#project GoogleCloudbuildWorkerPool#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.timeouts"></a>

```csharp
public GoogleCloudbuildWorkerPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#timeouts GoogleCloudbuildWorkerPool#timeouts}

---

##### `WorkerConfig`<sup>Optional</sup> <a name="WorkerConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.workerConfig"></a>

```csharp
public GoogleCloudbuildWorkerPoolWorkerConfig WorkerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#worker_config GoogleCloudbuildWorkerPool#worker_config}

---

### GoogleCloudbuildWorkerPoolNetworkConfig <a name="GoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolNetworkConfig {
    string PeeredNetwork,
    string PeeredNetworkIpRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange">PeeredNetworkIpRange</a></code> | <code>string</code> | Optional. |

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetwork"></a>

```csharp
public string PeeredNetwork { get; set; }
```

- *Type:* string

Required.

Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#peered_network GoogleCloudbuildWorkerPool#peered_network}

---

##### `PeeredNetworkIpRange`<sup>Optional</sup> <a name="PeeredNetworkIpRange" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange"></a>

```csharp
public string PeeredNetworkIpRange { get; set; }
```

- *Type:* string

Optional.

Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#peered_network_ip_range GoogleCloudbuildWorkerPool#peered_network_ip_range}

---

### GoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="GoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolPrivateServiceConnect {
    string NetworkAttachment,
    bool|IResolvable RouteAllTraffic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic">RouteAllTraffic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Immutable. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

Required.

Immutable. The network attachment that the worker network interface is connected to. Must be in the format `projects/{project}/regions/{region}/networkAttachments/{networkAttachment}`. The region of network attachment must be the same as the worker pool. See [Network Attachments](https://cloud.google.com/vpc/docs/about-network-attachments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#network_attachment GoogleCloudbuildWorkerPool#network_attachment}

---

##### `RouteAllTraffic`<sup>Optional</sup> <a name="RouteAllTraffic" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic"></a>

```csharp
public bool|IResolvable RouteAllTraffic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Immutable.

Route all traffic through PSC interface. Enable this if you want full control of traffic in the private pool. Configure Cloud NAT for the subnet of network attachment if you need to access public Internet. If false, Only route private IPs, e.g. 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 through PSC interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#route_all_traffic GoogleCloudbuildWorkerPool#route_all_traffic}

---

### GoogleCloudbuildWorkerPoolTimeouts <a name="GoogleCloudbuildWorkerPoolTimeouts" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}.

---

### GoogleCloudbuildWorkerPoolWorkerConfig <a name="GoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolWorkerConfig {
    double DiskSizeGb = null,
    bool|IResolvable EnableNestedVirtualization = null,
    string MachineType = null,
    bool|IResolvable NoExternalIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Size of the disk attached to the worker, in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable nested virtualization on the worker, if supported by the machine type. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.machineType">MachineType</a></code> | <code>string</code> | Machine type of a worker, such as `n1-standard-1`. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.noExternalIp">NoExternalIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, workers are created without any public address, which prevents network egress to public IPs. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Size of the disk attached to the worker, in GB.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#disk_size_gb GoogleCloudbuildWorkerPool#disk_size_gb}

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.enableNestedVirtualization"></a>

```csharp
public bool|IResolvable EnableNestedVirtualization { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable nested virtualization on the worker, if supported by the machine type.

See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will set this to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#enable_nested_virtualization GoogleCloudbuildWorkerPool#enable_nested_virtualization}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

Machine type of a worker, such as `n1-standard-1`.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#machine_type GoogleCloudbuildWorkerPool#machine_type}

---

##### `NoExternalIp`<sup>Optional</sup> <a name="NoExternalIp" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.noExternalIp"></a>

```csharp
public bool|IResolvable NoExternalIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, workers are created without any public address, which prevents network egress to public IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloudbuild_worker_pool#no_external_ip GoogleCloudbuildWorkerPool#no_external_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="GoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange">ResetPeeredNetworkIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeeredNetworkIpRange` <a name="ResetPeeredNetworkIpRange" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange"></a>

```csharp
private void ResetPeeredNetworkIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput">PeeredNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput">PeeredNetworkIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">PeeredNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">PeeredNetworkIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeeredNetworkInput`<sup>Optional</sup> <a name="PeeredNetworkInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput"></a>

```csharp
public string PeeredNetworkInput { get; }
```

- *Type:* string

---

##### `PeeredNetworkIpRangeInput`<sup>Optional</sup> <a name="PeeredNetworkIpRangeInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput"></a>

```csharp
public string PeeredNetworkIpRangeInput { get; }
```

- *Type:* string

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```csharp
public string PeeredNetwork { get; }
```

- *Type:* string

---

##### `PeeredNetworkIpRange`<sup>Required</sup> <a name="PeeredNetworkIpRange" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```csharp
public string PeeredNetworkIpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudbuildWorkerPoolNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic">ResetRouteAllTraffic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRouteAllTraffic` <a name="ResetRouteAllTraffic" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic"></a>

```csharp
private void ResetRouteAllTraffic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput">RouteAllTrafficInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">RouteAllTraffic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `RouteAllTrafficInput`<sup>Optional</sup> <a name="RouteAllTrafficInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput"></a>

```csharp
public bool|IResolvable RouteAllTrafficInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `RouteAllTraffic`<sup>Required</sup> <a name="RouteAllTraffic" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```csharp
public bool|IResolvable RouteAllTraffic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudbuildWorkerPoolPrivateServiceConnect InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### GoogleCloudbuildWorkerPoolTimeoutsOutputReference <a name="GoogleCloudbuildWorkerPoolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudbuildWorkerPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

---


### GoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="GoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudbuildWorkerPoolWorkerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp">ResetNoExternalIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetNoExternalIp` <a name="ResetNoExternalIp" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp"></a>

```csharp
private void ResetNoExternalIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput">NoExternalIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">NoExternalIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public bool|IResolvable EnableNestedVirtualizationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `NoExternalIpInput`<sup>Optional</sup> <a name="NoExternalIpInput" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput"></a>

```csharp
public bool|IResolvable NoExternalIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization"></a>

```csharp
public bool|IResolvable EnableNestedVirtualization { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `NoExternalIp`<sup>Required</sup> <a name="NoExternalIp" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```csharp
public bool|IResolvable NoExternalIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudbuildWorkerPoolWorkerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---



