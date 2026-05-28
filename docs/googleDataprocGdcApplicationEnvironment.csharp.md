# `googleDataprocGdcApplicationEnvironment` Submodule <a name="`googleDataprocGdcApplicationEnvironment` Submodule" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcApplicationEnvironment <a name="GoogleDataprocGdcApplicationEnvironment" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcApplicationEnvironment(Construct Scope, string Id, GoogleDataprocGdcApplicationEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">PutSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">ResetApplicationEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">ResetSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSparkApplicationEnvironmentConfig` <a name="PutSparkApplicationEnvironmentConfig" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```csharp
private void PutSparkApplicationEnvironmentConfig(GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataprocGdcApplicationEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetApplicationEnvironmentId` <a name="ResetApplicationEnvironmentId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```csharp
private void ResetApplicationEnvironmentId()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSparkApplicationEnvironmentConfig` <a name="ResetSparkApplicationEnvironmentConfig" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```csharp
private void ResetSparkApplicationEnvironmentConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcApplicationEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcApplicationEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcApplicationEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcApplicationEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocGdcApplicationEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">SparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">ApplicationEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput">ServiceinstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">SparkApplicationEnvironmentConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId">ApplicationEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance">Serviceinstance</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SparkApplicationEnvironmentConfig`<sup>Required</sup> <a name="SparkApplicationEnvironmentConfig" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```csharp
public GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference SparkApplicationEnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts"></a>

```csharp
public GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationEnvironmentIdInput`<sup>Optional</sup> <a name="ApplicationEnvironmentIdInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```csharp
public string ApplicationEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceinstanceInput`<sup>Optional</sup> <a name="ServiceinstanceInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```csharp
public string ServiceinstanceInput { get; }
```

- *Type:* string

---

##### `SparkApplicationEnvironmentConfigInput`<sup>Optional</sup> <a name="SparkApplicationEnvironmentConfigInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```csharp
public GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig SparkApplicationEnvironmentConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataprocGdcApplicationEnvironmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationEnvironmentId`<sup>Required</sup> <a name="ApplicationEnvironmentId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```csharp
public string ApplicationEnvironmentId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```csharp
public string Serviceinstance { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentConfig" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcApplicationEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Serviceinstance,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string ApplicationEnvironmentId = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Namespace = null,
    string Project = null,
    GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig SparkApplicationEnvironmentConfig = null,
    GoogleDataprocGdcApplicationEnvironmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | The location of the application environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance">Serviceinstance</a></code> | <code>string</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">ApplicationEnvironmentId</a></code> | <code>string</code> | The id of the application environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace">Namespace</a></code> | <code>string</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">SparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#location GoogleDataprocGdcApplicationEnvironment#location}

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```csharp
public string Serviceinstance { get; set; }
```

- *Type:* string

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#serviceinstance GoogleDataprocGdcApplicationEnvironment#serviceinstance}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#annotations GoogleDataprocGdcApplicationEnvironment#annotations}

---

##### `ApplicationEnvironmentId`<sup>Optional</sup> <a name="ApplicationEnvironmentId" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```csharp
public string ApplicationEnvironmentId { get; set; }
```

- *Type:* string

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#application_environment_id GoogleDataprocGdcApplicationEnvironment#application_environment_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#deletion_policy GoogleDataprocGdcApplicationEnvironment#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#display_name GoogleDataprocGdcApplicationEnvironment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#labels GoogleDataprocGdcApplicationEnvironment#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#namespace GoogleDataprocGdcApplicationEnvironment#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}.

---

##### `SparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="SparkApplicationEnvironmentConfig" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```csharp
public GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig SparkApplicationEnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#spark_application_environment_config GoogleDataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```csharp
public GoogleDataprocGdcApplicationEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#timeouts GoogleDataprocGdcApplicationEnvironment#timeouts}

---

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig {
    System.Collections.Generic.IDictionary<string, string> DefaultProperties = null,
    string DefaultVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">DefaultProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `DefaultProperties`<sup>Optional</sup> <a name="DefaultProperties" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#default_properties GoogleDataprocGdcApplicationEnvironment#default_properties}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; set; }
```

- *Type:* string

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#default_version GoogleDataprocGdcApplicationEnvironment#default_version}

---

### GoogleDataprocGdcApplicationEnvironmentTimeouts <a name="GoogleDataprocGdcApplicationEnvironmentTimeouts" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcApplicationEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">ResetDefaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultProperties` <a name="ResetDefaultProperties" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```csharp
private void ResetDefaultProperties()
```

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```csharp
private void ResetDefaultVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">DefaultPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">DefaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">DefaultProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPropertiesInput`<sup>Optional</sup> <a name="DefaultPropertiesInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```csharp
public string DefaultVersionInput { get; }
```

- *Type:* string

---

##### `DefaultProperties`<sup>Required</sup> <a name="DefaultProperties" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataprocGdcApplicationEnvironmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---



