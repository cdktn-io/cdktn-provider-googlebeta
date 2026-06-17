# `googleMonitoringNotificationChannel` Submodule <a name="`googleMonitoringNotificationChannel` Submodule" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringNotificationChannel <a name="GoogleMonitoringNotificationChannel" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMonitoringNotificationChannel(Construct Scope, string Id, GoogleMonitoringNotificationChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig">GoogleMonitoringNotificationChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig">GoogleMonitoringNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels">PutSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetSensitiveLabels">ResetSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSensitiveLabels` <a name="PutSensitiveLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels"></a>

```csharp
private void PutSensitiveLabels(GoogleMonitoringNotificationChannelSensitiveLabels Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMonitoringNotificationChannelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSensitiveLabels` <a name="ResetSensitiveLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetSensitiveLabels"></a>

```csharp
private void ResetSensitiveLabels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMonitoringNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMonitoringNotificationChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMonitoringNotificationChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMonitoringNotificationChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleMonitoringNotificationChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleMonitoringNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringNotificationChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabels">SensitiveLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference">GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference">GoogleMonitoringNotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.verificationStatus">VerificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabelsInput">SensitiveLabelsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDelete">ForceDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SensitiveLabels`<sup>Required</sup> <a name="SensitiveLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```csharp
public GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference SensitiveLabels { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference">GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeouts"></a>

```csharp
public GoogleMonitoringNotificationChannelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference">GoogleMonitoringNotificationChannelTimeoutsOutputReference</a>

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```csharp
public string VerificationStatus { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDeleteInput"></a>

```csharp
public bool|IResolvable ForceDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SensitiveLabelsInput`<sup>Optional</sup> <a name="SensitiveLabelsInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabelsInput"></a>

```csharp
public GoogleMonitoringNotificationChannelSensitiveLabels SensitiveLabelsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleMonitoringNotificationChannelTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDelete"></a>

```csharp
public bool|IResolvable ForceDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringNotificationChannelConfig <a name="GoogleMonitoringNotificationChannelConfig" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMonitoringNotificationChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Type,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    bool|IResolvable Enabled = null,
    bool|IResolvable ForceDelete = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleMonitoringNotificationChannelSensitiveLabels SensitiveLabels = null,
    GoogleMonitoringNotificationChannelTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.type">Type</a></code> | <code>string</code> | The type of the notification channel. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.description">Description</a></code> | <code>string</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.displayName">DisplayName</a></code> | <code>string</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forceDelete">ForceDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.sensitiveLabels">SensitiveLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#type GoogleMonitoringNotificationChannel#type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#deletion_policy GoogleMonitoringNotificationChannel#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#description GoogleMonitoringNotificationChannel#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#display_name GoogleMonitoringNotificationChannel#display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#enabled GoogleMonitoringNotificationChannel#enabled}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forceDelete"></a>

```csharp
public bool|IResolvable ForceDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#force_delete GoogleMonitoringNotificationChannel#force_delete}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#labels GoogleMonitoringNotificationChannel#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}.

---

##### `SensitiveLabels`<sup>Optional</sup> <a name="SensitiveLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.sensitiveLabels"></a>

```csharp
public GoogleMonitoringNotificationChannelSensitiveLabels SensitiveLabels { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#sensitive_labels GoogleMonitoringNotificationChannel#sensitive_labels}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.timeouts"></a>

```csharp
public GoogleMonitoringNotificationChannelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#timeouts GoogleMonitoringNotificationChannel#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#user_labels GoogleMonitoringNotificationChannel#user_labels}

---

### GoogleMonitoringNotificationChannelSensitiveLabels <a name="GoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMonitoringNotificationChannelSensitiveLabels {
    string AuthToken = null,
    string AuthTokenWo = null,
    string AuthTokenWoVersion = null,
    string Password = null,
    string PasswordWo = null,
    string PasswordWoVersion = null,
    string ServiceKey = null,
    string ServiceKeyWo = null,
    string ServiceKeyWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authToken">AuthToken</a></code> | <code>string</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authTokenWo">AuthTokenWo</a></code> | <code>string</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authTokenWoVersion">AuthTokenWoVersion</a></code> | <code>string</code> | Triggers update of 'auth_token_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.password">Password</a></code> | <code>string</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.passwordWo">PasswordWo</a></code> | <code>string</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | Triggers update of 'password_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKey">ServiceKey</a></code> | <code>string</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKeyWo">ServiceKeyWo</a></code> | <code>string</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKeyWoVersion">ServiceKeyWoVersion</a></code> | <code>string</code> | Triggers update of 'service_key_wo' write-only. |

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authToken"></a>

```csharp
public string AuthToken { get; set; }
```

- *Type:* string

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#auth_token GoogleMonitoringNotificationChannel#auth_token}

---

##### `AuthTokenWo`<sup>Optional</sup> <a name="AuthTokenWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authTokenWo"></a>

```csharp
public string AuthTokenWo { get; set; }
```

- *Type:* string

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#auth_token_wo GoogleMonitoringNotificationChannel#auth_token_wo}

---

##### `AuthTokenWoVersion`<sup>Optional</sup> <a name="AuthTokenWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authTokenWoVersion"></a>

```csharp
public string AuthTokenWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'auth_token_wo' write-only.

Increment this value when an update to 'auth_token_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#auth_token_wo_version GoogleMonitoringNotificationChannel#auth_token_wo_version}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#password GoogleMonitoringNotificationChannel#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#password_wo GoogleMonitoringNotificationChannel#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#password_wo_version GoogleMonitoringNotificationChannel#password_wo_version}

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKey"></a>

```csharp
public string ServiceKey { get; set; }
```

- *Type:* string

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#service_key GoogleMonitoringNotificationChannel#service_key}

---

##### `ServiceKeyWo`<sup>Optional</sup> <a name="ServiceKeyWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKeyWo"></a>

```csharp
public string ServiceKeyWo { get; set; }
```

- *Type:* string

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#service_key_wo GoogleMonitoringNotificationChannel#service_key_wo}

---

##### `ServiceKeyWoVersion`<sup>Optional</sup> <a name="ServiceKeyWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKeyWoVersion"></a>

```csharp
public string ServiceKeyWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'service_key_wo' write-only.

Increment this value when an update to 'service_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#service_key_wo_version GoogleMonitoringNotificationChannel#service_key_wo_version}

---

### GoogleMonitoringNotificationChannelTimeouts <a name="GoogleMonitoringNotificationChannelTimeouts" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMonitoringNotificationChannelTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWo">ResetAuthTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWoVersion">ResetAuthTokenWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWo">ResetServiceKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWoVersion">ResetServiceKeyWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken"></a>

```csharp
private void ResetAuthToken()
```

##### `ResetAuthTokenWo` <a name="ResetAuthTokenWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWo"></a>

```csharp
private void ResetAuthTokenWo()
```

##### `ResetAuthTokenWoVersion` <a name="ResetAuthTokenWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWoVersion"></a>

```csharp
private void ResetAuthTokenWoVersion()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWo"></a>

```csharp
private void ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWoVersion"></a>

```csharp
private void ResetPasswordWoVersion()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey"></a>

```csharp
private void ResetServiceKey()
```

##### `ResetServiceKeyWo` <a name="ResetServiceKeyWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWo"></a>

```csharp
private void ResetServiceKeyWo()
```

##### `ResetServiceKeyWoVersion` <a name="ResetServiceKeyWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWoVersion"></a>

```csharp
private void ResetServiceKeyWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput">AuthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoInput">AuthTokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersionInput">AuthTokenWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoInput">ServiceKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersionInput">ServiceKeyWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">AuthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWo">AuthTokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersion">AuthTokenWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">ServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWo">ServiceKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersion">ServiceKeyWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput"></a>

```csharp
public string AuthTokenInput { get; }
```

- *Type:* string

---

##### `AuthTokenWoInput`<sup>Optional</sup> <a name="AuthTokenWoInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoInput"></a>

```csharp
public string AuthTokenWoInput { get; }
```

- *Type:* string

---

##### `AuthTokenWoVersionInput`<sup>Optional</sup> <a name="AuthTokenWoVersionInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersionInput"></a>

```csharp
public string AuthTokenWoVersionInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersionInput"></a>

```csharp
public string PasswordWoVersionInput { get; }
```

- *Type:* string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput"></a>

```csharp
public string ServiceKeyInput { get; }
```

- *Type:* string

---

##### `ServiceKeyWoInput`<sup>Optional</sup> <a name="ServiceKeyWoInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoInput"></a>

```csharp
public string ServiceKeyWoInput { get; }
```

- *Type:* string

---

##### `ServiceKeyWoVersionInput`<sup>Optional</sup> <a name="ServiceKeyWoVersionInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersionInput"></a>

```csharp
public string ServiceKeyWoVersionInput { get; }
```

- *Type:* string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```csharp
public string AuthToken { get; }
```

- *Type:* string

---

##### `AuthTokenWo`<sup>Required</sup> <a name="AuthTokenWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWo"></a>

```csharp
public string AuthTokenWo { get; }
```

- *Type:* string

---

##### `AuthTokenWoVersion`<sup>Required</sup> <a name="AuthTokenWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersion"></a>

```csharp
public string AuthTokenWoVersion { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWo"></a>

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; }
```

- *Type:* string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```csharp
public string ServiceKey { get; }
```

- *Type:* string

---

##### `ServiceKeyWo`<sup>Required</sup> <a name="ServiceKeyWo" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWo"></a>

```csharp
public string ServiceKeyWo { get; }
```

- *Type:* string

---

##### `ServiceKeyWoVersion`<sup>Required</sup> <a name="ServiceKeyWoVersion" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersion"></a>

```csharp
public string ServiceKeyWoVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringNotificationChannelSensitiveLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---


### GoogleMonitoringNotificationChannelTimeoutsOutputReference <a name="GoogleMonitoringNotificationChannelTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleMonitoringNotificationChannelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleMonitoringNotificationChannelTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

---



