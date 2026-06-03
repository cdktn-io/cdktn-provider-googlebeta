# `googleDataprocGdcServiceInstance` Submodule <a name="`googleDataprocGdcServiceInstance` Submodule" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcServiceInstance <a name="GoogleDataprocGdcServiceInstance" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstance(Construct Scope, string Id, GoogleDataprocGdcServiceInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig">GoogleDataprocGdcServiceInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig">GoogleDataprocGdcServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster">PutGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig">PutSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster">ResetGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig">ResetSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGdceCluster` <a name="PutGdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster"></a>

```csharp
private void PutGdceCluster(GoogleDataprocGdcServiceInstanceGdceCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `PutSparkServiceInstanceConfig` <a name="PutSparkServiceInstanceConfig" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```csharp
private void PutSparkServiceInstanceConfig(GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataprocGdcServiceInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGdceCluster` <a name="ResetGdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster"></a>

```csharp
private void ResetGdceCluster()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetSparkServiceInstanceConfig` <a name="ResetSparkServiceInstanceConfig" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```csharp
private void ResetSparkServiceInstanceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcServiceInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcServiceInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcServiceInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataprocGdcServiceInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocGdcServiceInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount">EffectiveServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster">GdceCluster</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState">RequestedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig">SparkServiceInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput">GdceClusterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput">ServiceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">SparkServiceInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveServiceAccount`<sup>Required</sup> <a name="EffectiveServiceAccount" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```csharp
public string EffectiveServiceAccount { get; }
```

- *Type:* string

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster"></a>

```csharp
public GoogleDataprocGdcServiceInstanceGdceClusterOutputReference GdceCluster { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RequestedState`<sup>Required</sup> <a name="RequestedState" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState"></a>

```csharp
public string RequestedState { get; }
```

- *Type:* string

---

##### `SparkServiceInstanceConfig`<sup>Required</sup> <a name="SparkServiceInstanceConfig" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```csharp
public GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference SparkServiceInstanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts"></a>

```csharp
public GoogleDataprocGdcServiceInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GdceClusterInput`<sup>Optional</sup> <a name="GdceClusterInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput"></a>

```csharp
public GoogleDataprocGdcServiceInstanceGdceCluster GdceClusterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceInstanceIdInput`<sup>Optional</sup> <a name="ServiceInstanceIdInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```csharp
public string ServiceInstanceIdInput { get; }
```

- *Type:* string

---

##### `SparkServiceInstanceConfigInput`<sup>Optional</sup> <a name="SparkServiceInstanceConfigInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```csharp
public GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig SparkServiceInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataprocGdcServiceInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId"></a>

```csharp
public string ServiceInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceConfig" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string ServiceInstanceId,
    string DeletionPolicy = null,
    string DisplayName = null,
    GoogleDataprocGdcServiceInstanceGdceCluster GdceCluster = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string ServiceAccount = null,
    GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig SparkServiceInstanceConfig = null,
    GoogleDataprocGdcServiceInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location">Location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>string</code> | Id of the service instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster">GdceCluster</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">SparkServiceInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#location GoogleDataprocGdcServiceInstance#location}

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```csharp
public string ServiceInstanceId { get; set; }
```

- *Type:* string

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#service_instance_id GoogleDataprocGdcServiceInstance#service_instance_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#deletion_policy GoogleDataprocGdcServiceInstance#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#display_name GoogleDataprocGdcServiceInstance#display_name}

---

##### `GdceCluster`<sup>Optional</sup> <a name="GdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```csharp
public GoogleDataprocGdcServiceInstanceGdceCluster GdceCluster { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#labels GoogleDataprocGdcServiceInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#service_account GoogleDataprocGdcServiceInstance#service_account}

---

##### `SparkServiceInstanceConfig`<sup>Optional</sup> <a name="SparkServiceInstanceConfig" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```csharp
public GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig SparkServiceInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#spark_service_instance_config GoogleDataprocGdcServiceInstance#spark_service_instance_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts"></a>

```csharp
public GoogleDataprocGdcServiceInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#timeouts GoogleDataprocGdcServiceInstance#timeouts}

---

### GoogleDataprocGdcServiceInstanceGdceCluster <a name="GoogleDataprocGdcServiceInstanceGdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceGdceCluster {
    string GdceCluster
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster">GdceCluster</a></code> | <code>string</code> | Gdce cluster resource id. |

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```csharp
public string GdceCluster { get; set; }
```

- *Type:* string

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig {

};
```


### GoogleDataprocGdcServiceInstanceTimeouts <a name="GoogleDataprocGdcServiceInstanceTimeouts" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcServiceInstanceGdceClusterOutputReference <a name="GoogleDataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceGdceClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">GdceClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">GdceCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GdceClusterInput`<sup>Optional</sup> <a name="GdceClusterInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```csharp
public string GdceClusterInput { get; }
```

- *Type:* string

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```csharp
public string GdceCluster { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocGdcServiceInstanceGdceCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---


### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### GoogleDataprocGdcServiceInstanceTimeoutsOutputReference <a name="GoogleDataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataprocGdcServiceInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataprocGdcServiceInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---



